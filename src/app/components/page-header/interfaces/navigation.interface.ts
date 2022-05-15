export interface NavItem {
  id: string;
  imgId?: string;
  link: string;
  name: string;
  dropdown?: Array<{id: string; imgId?: string, link: string; name: string}>
}
