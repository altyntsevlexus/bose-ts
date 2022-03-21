import { useEffect, useState } from 'react';
import { CategoryType } from '../../types';
import styled from './Categories.module.scss';
import Category from '../../components/Category';
import Title from '../../components/Title';
import { getCategories } from '../../api';
import Loader from '../../components/Loader';

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const handleCategories = async () => {
    const response = await getCategories();

    const categoriesData = response.data.data.map((category: any) => {
      return {
        title: category.attributes.title,
        link: category.attributes.link,
        image: category.attributes.image.data.attributes.url,
      };
    });

    setCategories(categoriesData);
  };

  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <>
      <Title value="Главная" />
      <div className={styled.categories}>
        {categories.length > 0 ? (
          categories.map((category) => {
            return <Category key={category.title} category={category} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Categories;
