import axios from 'axios';
import qs from 'qs';

const boseApi = axios.create({
  baseURL: 'http://localhost:1337/api/',
});

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
