import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ShopWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  staff?: UserListRelationFilter;
};
