import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  shop?: ShopWhereUniqueInput;
  username?: StringFilter;
};
