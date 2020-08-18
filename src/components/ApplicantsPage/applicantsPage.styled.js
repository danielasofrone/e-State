import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 30px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  padding: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Input = styled.input`
  width: 160px;
  height: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #9d9d9d;
  text-align: center;

  ::placeholder {
    font-family: "Roboto", sans-serif;
    color: #9d9d9d;
    font-size: 14px;
    line-height: 16px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media (min-width: 576px) {
    width: 200px;
    height: 26px;
  }
  @media (min-width: 768px) {
    width: 305px;
    height: 45px;
  }
`;

export const DropdownFilters = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  text-align: center;
  @media (min-width: 576px) {
    margin-left: 30px;
  }
`;

export const DropdownButton = styled.div`
  width: 30px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  @media (min-width: 576px) {
    width: 40px;
    height: 32px;
  }
  @media (min-width: 768px) {
    width: 80px;
    height: 49px;
    margin-right: 20px;
  }
`;

export const DropdownText = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 8px;
  line-height: 14px;
  color: #4a4a4a;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
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
