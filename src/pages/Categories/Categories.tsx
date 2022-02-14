import { useEffect, useState } from 'react';
import { CategoryType } from '../../types';
import styled from './Categories.module.scss';
import Category from '../../components/Category';
import Title from '../../components/Title';
import { getCategories } from '../../api';

const Products = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const handleCategories = async () => {
      const response = await getCategories();

      const categoriesData = response.data.data.map((category: any) => {
        return {
          title: category.attributes.title,
          link: category.attributes.link,
          image: `http://localhost:1337${category.attributes.image.data.attributes.url}`,
        };
      });

      setCategories(categoriesData);
    };

    handleCategories();
  }, []);

  return (
    <>
      <Title value="Главная" />
      <div className={styled.categories}>
        {categories.map((category) => {
          return <Category key={category.title} category={category} />;
        })}
      </div>
    </>
  );
};

export default Products;
