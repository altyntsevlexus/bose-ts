import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, herokuURL } from '../../api';
import Product from '../../components/Product';
import { ProductType } from '../../types';

const SingleProduct = () => {
  const [product, setProduct] = useState<ProductType>();

  const { id } = useParams();

  useEffect(() => {
    const handleProduct = async () => {
      const response = await getProduct(id!);

      const productData = response.data.data[0].attributes;

      setProduct({
        title: productData.title,
        description: productData.description,
        price: productData.price,
        colors: productData.colors,
        images: productData.images.data.map(
          (image: any) => `${herokuURL}${image.attributes.url}`,
        ),
        productId: productData.productId.toString(),
      });
    };

    handleProduct();
  }, []);

  return product ? <Product product={product} /> : <p>Loading ...</p>;
};

export default SingleProduct;
