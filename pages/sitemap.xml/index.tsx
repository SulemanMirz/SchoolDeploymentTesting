import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getSchoolSlugs } from "services/SchoolService";

const createSitemapField = (suffix: string) => ({
  loc: `https://school.dojo.plus${suffix}`, // Absolute url
  lastmod: new Date().toISOString(),
  // changefreq
  // priority
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const slugs = await getSchoolSlugs();

  // TODO: use node fs
  const suffixes = ["", "/location", "/schedule", "/trial"];

  const fields = slugs.flatMap(({ slug }) =>
    suffixes.map((suffix) => createSitemapField(`/${slug}${suffix}`))
  );

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
