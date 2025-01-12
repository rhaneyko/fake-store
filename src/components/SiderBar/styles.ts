import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  font-family: "DM Sans", sans-serif;
`;

export const CategoriesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CategoriesListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CategoriesListItemCheckbox = styled.input`
  margin-right: 10px;
`;
