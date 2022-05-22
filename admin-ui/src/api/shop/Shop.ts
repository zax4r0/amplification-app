import { Product } from "../product/Product";
import { User } from "../user/User";

export type Shop = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  staff?: Array<User>;
  updatedAt: Date;
};
