export type ProductType = {
  title: string;
  description: string;
  price: number;
  colors: string[];
  images: string[];
  productId: string;
};

export type CartProductType = {
  title: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
  productId: string;
};

export type CategoryType = {
  title: string;
  image: string;
  link: string;
};
