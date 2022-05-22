import { ProductCreateNestedManyWithoutShopsInput } from "./ProductCreateNestedManyWithoutShopsInput";
import { UserCreateNestedManyWithoutShopsInput } from "./UserCreateNestedManyWithoutShopsInput";

export type ShopCreateInput = {
  products?: ProductCreateNestedManyWithoutShopsInput;
  staff?: UserCreateNestedManyWithoutShopsInput;
};
