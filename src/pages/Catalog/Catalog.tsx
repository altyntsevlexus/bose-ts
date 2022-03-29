import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductType } from '../../types';
import Card from '../../components/Card';
import styled from './Catalog.module.scss';
import Title from '../../components/Title';
import { getProducts, getTitle } from '../../api';
import Loader from '../../components/Loader';

const Catalog = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [title, setTitle] = useState<string>('');

  const { category } = useParams();
  const navigate = useNavigate();

  const handleProducts = async () => {
    const response = await getProducts(category!);

    if (response.data.data.length > 0) {
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
    } else {
      navigate('/');
    }
  };

  const handleTitle = async () => {
    const response = await getTitle(category!);

    const result = response.data.data[0]?.attributes.title || 'Каталог';

    setTitle(result);
  };

  const cleanup = () => {
    setProducts([]);
    setTitle('');
  };

  useEffect(() => {
    handleTitle();
    handleProducts();

    return () => cleanup();
  }, []);

  return (
    <>
      <Title value={title} />
      <div className={styled.catalog}>
        {products.length > 0 ? (
          products.map((product) => {
            return <Card key={product.title} product={product} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Catalog;
