import { Shop as TShop } from "../api/shop/Shop";

export const SHOP_TITLE_FIELD = "id";

export const ShopTitle = (record: TShop): string => {
  return record.id || record.id;
};
