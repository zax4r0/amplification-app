import { CategoryCreateNestedManyWithoutCategoriesInput } from "./CategoryCreateNestedManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryCreateInput = {
  category?: CategoryCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
  subCategory?: CategoryWhereUniqueInput | null;
};
