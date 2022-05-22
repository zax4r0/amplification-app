export type Category = {
  category?: Array<Category>;
  createdAt: Date;
  id: string;
  name: string | null;
  subCategory?: Category | null;
  updatedAt: Date;
};
