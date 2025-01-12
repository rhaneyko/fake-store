import React, { useEffect, useState } from "react";
import { ApiGetAllCategories } from "../../services/api";

import {
  SideBarContainer,
  CategoriesList,
  CategoriesListItem,
  CategoriesListItemCheckbox
} from './styles'

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ApiGetAllCategories.get<string[]>("/products/categories");
        setCategories(response.data);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar as categorias");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);


  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <SideBarContainer>
      <h1>Categorias</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <CategoriesList>
          {categories.map((category, index) => (
            <CategoriesListItem key={index}>
              <CategoriesListItemCheckbox
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <span style={{ textTransform: "capitalize" }}>{category}</span>
            </CategoriesListItem>
          ))}
        </CategoriesList>
      )}
    </SideBarContainer>
  );
};

export default CategoryList;
