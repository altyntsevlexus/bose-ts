import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../api';
import Loader from '../../components/Loader';
import Product from '../../components/Product';
import { ProductType } from '../../types';
import styled from './SingleProduct.module.scss';

const SingleProduct = () => {
  const [product, setProduct] = useState<ProductType>();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleProduct = async () => {
    try {
      const response = await getProduct(id!);

      const productData = response.data.data[0].attributes;

      setProduct({
        title: productData.title,
        description: productData.description,
        price: productData.price,
        colors: productData.colors,
        images: productData.images.data.map(
          (image: any) => image.attributes.url,
        ),
        productId: productData.productId.toString(),
      });
    } catch {
      navigate('/');
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div className={styled.product}>
      {product ? <Product product={product} /> : <Loader />}
    </div>
  );
};

export default SingleProduct;
