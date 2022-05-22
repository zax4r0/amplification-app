import { CategoryListRelationFilter } from "./CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryWhereInput = {
  category?: CategoryListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subCategory?: CategoryWhereUniqueInput;
};
