export interface IAccount {
  [index: string];
  id: number;
  email: string;
  name: string;
  mobile: string;
  adminType: string;
  fieldOffice?: string | null;
  basicAddr?: string | null;
  detailAddr?: string | null;
  authorizeType: string;
  status: boolean;
  createdAt: number;
  updatedAt: number;
  deleted: boolean;
  password?: string;
  password2?: string;
}

export interface ITableHeader {
  id?: string;
  isCheckBox?: boolean;
  minWidth?: number;
  title?: string;
  headerWidth?: number;
  width?: number;
  wrapWidth?: number;
  align?: string;
}
