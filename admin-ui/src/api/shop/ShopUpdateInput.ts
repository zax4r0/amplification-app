import { ProductUpdateManyWithoutShopsInput } from "./ProductUpdateManyWithoutShopsInput";
import { UserUpdateManyWithoutShopsInput } from "./UserUpdateManyWithoutShopsInput";

export type ShopUpdateInput = {
  products?: ProductUpdateManyWithoutShopsInput;
  staff?: UserUpdateManyWithoutShopsInput;
};
