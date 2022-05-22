import { ShopWhereInput } from "./ShopWhereInput";
import { ShopOrderByInput } from "./ShopOrderByInput";

export type ShopFindManyArgs = {
  where?: ShopWhereInput;
  orderBy?: Array<ShopOrderByInput>;
  skip?: number;
  take?: number;
};
