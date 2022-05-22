import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryUpdateInput = {
  category?: CategoryUpdateManyWithoutCategoriesInput;
  name?: string | null;
  subCategory?: CategoryWhereUniqueInput | null;
};
