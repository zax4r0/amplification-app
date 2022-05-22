import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subCategoryId?: SortOrder;
  updatedAt?: SortOrder;
};
