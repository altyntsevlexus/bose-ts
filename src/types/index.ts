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
  error: string | null | undefined;
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

export type UserPayloadType = {
  user: {
    id: number;
    email: string;
    username: string;
    blocked: boolean;
    confirmed: boolean;
  };
  jwt: string;
};

export type CredentialsType = {
  identifier: string;
  password: string;
};

export type LoginValues = {
  email: string;
  password: string;
};
