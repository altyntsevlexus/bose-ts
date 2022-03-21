import axios from 'axios';
import qs from 'qs';
import { CredentialsType } from '../types';

const boseApi = axios.create({
  baseURL: 'https://floating-brook-88017.herokuapp.com/api/',
});

export const setUpInterceptors = (store: any, logoutFunc: () => void) => {
  boseApi.interceptors.request.use((req) => {
    const token = store.getState().user.data.jwt;

    if (token) {
      req.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return req;
  });

  boseApi.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      if (error.response.status === 401) {
        store.dispatch(logoutFunc());
      }
      return Promise.reject(error);
    },
  );
};

export const getCategories = async () => {
  const query = qs.stringify(
    {
      populate: ['image'],
    },

    {
      encodeValuesOnly: true,
    },
  );
  const response = await boseApi.get(`categories?${query}`);

  return response;
};

export const getProducts = async (category: string) => {
  const query = qs.stringify(
    {
      filters: {
        category: {
          link: {
            $eq: category,
          },
        },
      },
      populate: ['images'],
    },

    {
      encodeValuesOnly: true,
    },
  );
  const response = await boseApi.get(`products?${query}`);

  return response;
};

export const getProduct = async (id: string) => {
  const query = qs.stringify(
    {
      filters: {
        productId: {
          $eq: id,
        },
      },
      populate: ['images'],
    },

    {
      encodeValuesOnly: true,
    },
  );
  const response = await boseApi.get(`products?${query}`);

  return response;
};

export const getTitle = async (category: string) => {
  const response = await boseApi.get(
    `categories?filters[link][$eq]=${category}`,
  );

  return response;
};

export const loginUser = async (credentials: CredentialsType) => {
  const response = await boseApi.post('auth/local', {
    identifier: credentials.identifier,
    password: credentials.password,
  });

  return response.data;
};
