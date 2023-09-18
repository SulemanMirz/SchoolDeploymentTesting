export enum MartialArtsTables {
  STYLES = "Style",
}

export enum MartialArtsStyleFields {
  NAME = "Name",
}

export type MartialArtsStyleData = {
  [MartialArtsStyleFields.NAME]?: string;
};
