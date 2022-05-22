import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  shop?: ShopWhereUniqueInput | null;
  username: string;
};
