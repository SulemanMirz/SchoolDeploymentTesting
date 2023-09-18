import { AirtableService, SupabaseService } from ".";
import { Customer, CustomerTableName } from "models/CustomerModel";
import { LeadsTables } from "models/LeadsModel";

export async function createCustomer(customer: Customer) {
  const response = await SupabaseService.from(CustomerTableName).insert([
    customer,
  ]);

  if (response.error) {
    throw response.error;
  }

  return response;
}

const LeadesData = AirtableService.base(
  process.env.FREE_SIGNUP_KEY_LEADS
)(LeadsTables.LEADES)

const AllSchoolsData = AirtableService.base(
  process.env.GET_ALL_SCHOOL
)(LeadsTables.ALL_SCHOOLS)



export async function signUpFreeClasses(body: any) {  
  try {
    const customer = body?.customer;
    const schoolId=await getAllSchoolData(customer?.school_slug)
    const response: any = await LeadesData.create({
      "Full Name": customer.name,
      Email: customer?.email,
      Phone: customer?.phone,
      Country: customer?.Country,
      "Additional Information": customer?.notes,
      School: [schoolId?.[0]?.id],
    })
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getAllSchoolData(school: any) {
  try {
    const response = await AllSchoolsData.select({
      filterByFormula: `{Slug} = '${school}'`,
    }).all();
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
