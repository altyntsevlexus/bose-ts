import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { ProductType } from '../../types';
import Item from '../../components/Item';
import styled from './Products.module.scss';

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const query = qs.stringify(
      {
        filters: {
          category: {
            name: {
              $eq: 'Headphones',
            },
          },
        },
        populate: ['images'],
      },

      {
        encodeValuesOnly: true,
      },
    );

    const getProductsData = async () => {
      const productsData = await axios(
        `http://localhost:1337/api/products?${query}`,
      );

      const productsArr = productsData.data.data.map((product: any) => {
        return {
          title: product.attributes.title,
          description: product.attributes.description,
          colors: product.attributes.colors,
          price: product.attributes.price,
          images: product.attributes.images.data.map(
            (image: any) => `http://localhost:1337${image.attributes.url}`,
          ),
        };
      });

      setProducts(productsArr);
    };

    getProductsData();
  }, []);

  return (
    <div className={styled.products}>
      {products.map((product) => {
        // @ts-ignore
        return <Item key={product.title} product={product} />;
      })}
    </div>
  );
};

export default Products;
