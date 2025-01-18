import React, { createContext, useContext, useState } from "react";

interface CategoryContextProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <CategoryContext.Provider value={{ selectedCategories, setSelectedCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used within a CategoryProvider");
  }
  return context;
};
