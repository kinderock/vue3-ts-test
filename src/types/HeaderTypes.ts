interface HeaderDataItem {
  class: string;
  title: string;
}

export interface HeaderData {
  [key: string]: HeaderDataItem;
}