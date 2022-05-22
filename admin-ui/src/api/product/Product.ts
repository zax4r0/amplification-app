import { Order } from "../order/Order";
import { Shop } from "../shop/Shop";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  shop?: Shop | null;
  updatedAt: Date;
};
