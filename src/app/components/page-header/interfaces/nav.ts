export interface Nav {
  id?: string;
  link: string;
  name: string;
  dropdown?: Array<{id?: string; link: string; name: string}>
}
