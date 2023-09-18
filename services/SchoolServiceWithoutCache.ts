import { AirtableService } from ".";
import {
  SchoolTableFields,
  SchoolTableData,
  SchoolTableFieldsSearch,
  SchoolTableViews,
  SchoolSlug,
  SchoolTables,
} from "models/SchoolModel";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import moize from "moize";
import { distance } from "utils";
import { formattedResponse } from "src/shared/utils/airtable-utils";

const table = AirtableService.base(process.env.AIRTABLE_BASE_SCHOOLS)(
  SchoolTables.SCHOOLS
);

export async function getSchoolFull<F = SchoolTableData>(
  slug: string,
  fields: SchoolTableFieldsSearch
) {
  try {
    const [record] = await table
      .select({
        filterByFormula: `{Slug} = '${slug}'`,
        //fields,
      })
      .all();
    // use record.get in order to get related tables value
    return fields?.reduce(
      (acc, recordKey) => ({
        ...acc,
        [recordKey]: record?.get(recordKey) ?? null,
      }),
      {}
    ) as F;
  } catch (err) {
    console.log(err);
    throw `School ${slug} not found`;
  }
}


async function getSchoolSlugsFull(
  filterByFormula: string = ""
): Promise<SchoolSlug[]> {
  const records = await table
    .select({
      fields: [SchoolTableFields.SLUG],
      view: SchoolTableViews.ACTIVE_PAGES,
      filterByFormula,
    })
    .all();

  return records?.map((record) => ({
    id: record?.id,
    slug: record?.fields?.[SchoolTableFields.SLUG] || "unknown",
  }));
}

export const getSchoolSlugs = moize.promise(getSchoolSlugsFull);

export const getSchoolStaticProps: GetStaticProps<
  { school: SchoolTableData },
  SchoolSlug
> = async ({ params }) => {
  const slug = params?.slug?.toLowerCase();

  const school =
    (await getSchoolFull<SchoolTableData>(
      slug,
      Object.values(SchoolTableFields)
    )) || {};

  return {
    props: {
      school,
    },
    revalidate: 1,
  };
};

export const getSchoolStaticPaths: GetStaticPaths<SchoolSlug> = async () => {
  const schoolSlugs = await getSchoolSlugsFull();

  return {
    paths: schoolSlugs
      ?.map((slug) => ({
        params: slug,
      })),
    fallback: "blocking",
  };
};

export type SchoolStaticProps = InferGetStaticPropsType<
  typeof getSchoolStaticProps
>;


async function getFilterForHomePage(): Promise<any[]> {
  try {
    let query = 'AND( {Country} != "", {City} != "", {Martial Arts Lookup} != "", {Slug} != "" )';
    const records: any = await table.select({
      filterByFormula: query,
      pageSize: 10
    }).all();
    const formatted = formattedResponse(records)
    return formatted
  } catch (error) {
    console.log(error);
  }
}
async function getFilterForSelectedCity(selectedCity): Promise<any[]> {
  try {
    let query = `{City} = '${selectedCity}'`;
    const records: any = await table.select({
      filterByFormula: query,
      view: SchoolTableViews.ACTIVE_PAGES
    }).all();
    const formatted = formattedResponse(records)
    return formatted
  } catch (error) {
    console.log(error);
  }
}
async function getFilterForCityPage(selectedCity): Promise<any[]> {
  try {

    let query = `AND( {City} = '${selectedCity}',  OR( {Location} != '',  {Neighborhood} != '' ), {Martial Arts Lookup} != '' )`
    const records: any = await table.select({
      filterByFormula: query,
      view: SchoolTableViews.ACTIVE_PAGES
    }).all();

    const formatted = formattedResponse(records)
    const finalData = formatted?.map((data) => {
      return {
        location: data?.location,
        neighborhood: data?.neighborhood,
        martialArts: data?.martialArtsLookup?.[0],
      }
    })

    return finalData
  } catch (error) {
    console.log(error);
  }
}
async function searchHomePageSelectedGym({ city, country, martialArts }: { city: string, country: string, martialArts: string }): Promise<any[]> {
  try {
    let filterQuery;

    switch (true) {
      case !country:
        filterQuery = `{City} = '${city}'`
        break;
      case !city:
        filterQuery = `{Country} = '${country}'`
        break;
      case Boolean(country && city):
        filterQuery = `AND({City} = '${city}',{Country} = '${country}')`
        break;
      default:
        filterQuery = `AND({City} = '${city}',{Country} = '${country}',{Martial Arts Lookup} = '${martialArts})`
    }

    const records: any = await table.select({
      filterByFormula: filterQuery,
      view: SchoolTableViews.ACTIVE_PAGES
    }).all();

    const formatted = formattedResponse(records)
    return formatted;
  } catch (error) {
    console.log(error);
  }
}

async function searchCityPageSelectedGym({ location, neighborhood, martialArts }: { location: string, neighborhood: string, martialArts: string }): Promise<any[]> {
  try {
    let filterCityQuery;

    switch (true) {
      case !location:
        filterCityQuery = `{Neighborhood} = '${neighborhood}'`
        break;
      case !neighborhood:
        filterCityQuery = `{Location} = '${location}'`
        break;
      case Boolean(location && neighborhood):
        filterCityQuery = `AND({Neighborhood} = '${neighborhood}',{Location} = '${location}')`
        break;
      default:
        filterCityQuery = `AND({Location} = '${location}',{Neighborhood} = '${neighborhood}',{Martial Arts Lookup} = '${martialArts})`
    }

    const records: any = await table.select({
      filterByFormula: filterCityQuery,
      view: SchoolTableViews.ACTIVE_PAGES
    }).all();

    const formatted = formattedResponse(records)
    return formatted;
  } catch (error) {
    console.log(error);
  }
}

async function getAllCountryAndCount(): Promise<any[]> {
  try {

    let query = `{Country}`
    const records: any = await table.select({
      filterByFormula: query,
      view: SchoolTableViews.ACTIVE_PAGES
    }).all();
    const formatted = formattedResponse(records)

    const allCountry = formatted?.map((data) => data.country);
    //@ts-ignore
    const uniqueCountry = [...new Set(allCountry)]
    const allCountrySchoolData = uniqueCountry?.map((country) => {
      const count = formatted?.filter((ele) => ele.country === country).length;
      return { country, count };
    });
    return allCountrySchoolData
  } catch (error) {
    console.log(error);
  }
}


async function getNeighboringSchools(userLat: number, userLong: number) {
  let query = `AND( {long} , {lat} , {City} )`
  const records: any = await table.select({
    filterByFormula: query,
    fields: ['long', 'lat', 'Record ID', 'City'],
    view: SchoolTableViews.ACTIVE_PAGES
  }).all();
  const formatted = formattedResponse(records)
  const distanceArr = formatted
    .map((el) => {
      const dist = distance(userLat, el.lat, userLong, el.long);
      return { id: el?.id, dist, ...el };
    })
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 100);
  return distanceArr;
}

async function getNeighboringSchoolCounts(userLat: number, userLong: number) {
  let query = `AND( {long} , {lat} , {City} )`

  const records: any = await table.select({
    filterByFormula: query,
    fields: ['long', 'lat', 'Record ID', 'City'],
    view: SchoolTableViews.ACTIVE_PAGES
  }).all();
  const formatted = formattedResponse(records)

  const distanceArr = formatted
    ?.filter((item) => item?.city)
    .map((el) => {
      const dist = distance(userLat, el.lat, userLong, el.long);
      return { id: el?.id, dist, ...el };
    })
    .sort((a, b) => a.dist - b.dist)


  const allCity = distanceArr?.map((ele) => ele.city);
  //  @ts-ignore
  const uniqueCity = [...new Set(allCity)];

  const nearestCity = uniqueCity?.map((city) => {
    const count = distanceArr?.filter((ele) => ele.city === city).length;
    return { city, count };
  }).slice(0, 3);
  return nearestCity;

}

async function getNeighboringSchoolCount(userLat: number, userLong: number) {
  let query = `AND( {long} , {lat} , {City} )`

  const records: any = await table.select({
    filterByFormula: query,
    view: SchoolTableViews.ACTIVE_PAGES
  }).all();
  const formatted = formattedResponse(records)
  return formatted.slice(0, 30);
}

async function filterMartialArtCity({ city, martialArts }: { city: string, martialArts: string }): Promise<any[]> {
  try {
    let filterQuery = `AND({City} = '${city}', FIND(", ${martialArts}, ", ", " & ARRAYJOIN({Martial Arts}) & ", "))`;
    const records: any = await table.select({
      filterByFormula: filterQuery,
      view: SchoolTableViews.ACTIVE_PAGES
    }).all();

    const formatted = formattedResponse(records)
    return formatted;
  } catch (error) {
    console.log(error);
  }
}

async function getRecentlyAddedSchools(numberOfSchools: number = 10) {

  const records: any = await table.select({
    maxRecords: 10,
    sort: [{ field: 'Created At', direction: 'desc' }]
  }).all();

  const formatted = formattedResponse(records)
  const recentlyAddedSchools = formatted.slice(-numberOfSchools);
  return recentlyAddedSchools;
}

export { getNeighboringSchools, getRecentlyAddedSchools, getNeighboringSchoolCount, getFilterForHomePage, getFilterForCityPage, getAllCountryAndCount, searchHomePageSelectedGym, searchCityPageSelectedGym, getFilterForSelectedCity, filterMartialArtCity };
