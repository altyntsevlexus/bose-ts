import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../types';
import Card from '../../components/Card';
import styled from './Catalog.module.scss';
import Title from '../../components/Title';
import { getProducts, getTitle } from '../../api';

const Catalog = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [title, setTitle] = useState<string>('');

  const { category } = useParams();

  useEffect(() => {
    const handleProducts = async () => {
      const response = await getProducts(category!);

      const productsArr = response.data.data.map((product: any) => {
        return {
          title: product.attributes.title,
          description: product.attributes.description,
          colors: product.attributes.colors,
          price: product.attributes.price,
          images: product.attributes.images.data.map(
            (image: any) => image.attributes.url,
          ),
          productId: product.attributes.productId.toString(),
        };
      });

      setProducts(productsArr);
    };

    handleProducts();
  }, []);

  useEffect(() => {
    const handleTitle = async () => {
      const response = await getTitle(category!);

      const result = response.data.data[0].attributes.title || 'Каталог';

      setTitle(result);
    };

    handleTitle();
  }, []);

  return (
    <>
      <Title value={title} />
      <div className={styled.products}>
        {products.map((product) => {
          return <Card key={product.title} product={product} />;
        })}
      </div>
    </>
  );
};

export default Catalog;
