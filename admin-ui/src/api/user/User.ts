import { Shop } from "../shop/Shop";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  shop?: Shop | null;
  updatedAt: Date;
  username: string;
};
