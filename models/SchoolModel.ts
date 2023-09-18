import { AirtableImageEntry } from "./AirtableModel";

export enum SchoolTables {
  SCHOOLS = "Schools",
  MARTIAL_ARTS = "Martial Arts",
}

export enum SchoolTableFields {
  ID = "ID",
  NAME = "School Name",
  SLUG = "Slug",
  SITE = "Website",
  ADDRESS = "Address 1",
  TEAM = "Team",
  PHONE = "Phone",
  MARTIAL_ARTS = "Martial Arts Lookup",
  LOGO = "School Logo",
  GEO = "Geo",
  FULL_ADDRESS = "Full Address",
  PHONE_TYPE = "Phone Type",
  EMAIL = "Email",
  DESCRIPTION = "Description",
  LAT = "Lat",
  LON = "Long",
  COUNTRY = 'Country',
  CITY = 'City',
  LOCATION = 'Location',
  NEIGHBORHOOD='Neighborhood',
}

export enum SchoolPhoneTypes {
  WHATSAPP = "WhatsApp",
  PHONE = "PHO",
  KAKAO = "KakaoTalk",
  TELEGRAM = "Telegram",
  GVOICE = "Google Voice",
  SKYPE = "Skype",
  SMS = "SMS",
  WECHAT = "WeChat",
}

export enum SchoolTableViews {
  ALL = "All Schools",
  ACTIVE_PAGES = "Active pages",
}

export type SchoolTableFieldsSearch = SchoolTableFields[];

export type SchoolTableData = {
  [SchoolTableFields.SLUG]?: string;
  [SchoolTableFields.NAME]?: string;
  [SchoolTableFields.SITE]?: string;
  [SchoolTableFields.ADDRESS]?: string;
  [SchoolTableFields.PHONE]?: string;
  [SchoolTableFields.FULL_ADDRESS]?: string;
  [SchoolTableFields.TEAM]?: string[];
  [SchoolTableFields.MARTIAL_ARTS]?: string[];
  [SchoolTableFields.LOGO]?: AirtableImageEntry[];
  [SchoolTableFields.PHONE_TYPE]?: SchoolPhoneTypes;
};

// cannot be interface due Next.js typings
export type SchoolSlug = { id: string; slug: string };
