import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 50px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  padding: 32px;
`;

export const ElementsContainer = styled.div``;
export const SearchBar = styled.input`
  width: 305px;
  height: 45px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
`;

export const Grid = styled.div`
  width: 100%;
  float: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

export const CategoryTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #4a4a4a;
  margin-top: 24px;
`;

export const Card = styled.div`
  width: auto;
  height: auto;
  min-height: 305px;
  min-height: 241px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  float: left;
  padding: 32px;
  display: grid;
  justify-content: space-between;
  flex-direction: column;
  grid-template-columns: 1fr 200px;
`;
