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

export type UserType = {
  data: {
    jwt: string;
    id: number;
    email: string;
    username: string;
    blocked: boolean;
    confirmed: boolean;
  };
  loading: boolean;
};

export type CredentialsType = {
  identifier: string;
  password: string;
};
