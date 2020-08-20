import styled from "styled-components";
import search from "../../assets/icons/search.svg";

export const Wrapper = styled.div`
  height: auto;
  margin: 0 30px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  padding: 20px;
`;

export const SearchBarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 200px;
  height: 100%;
  padding: 2px;
  background-image: url(/static/media/search.3ddbd4b3.svg);
  background-repeat: no-repeat;
  text-indent: 35px;
  background-position: left 10px center;
  border: 1px solid #e6e6e6;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #9d9d9d;
  @media (min-width: 576px) {
    width: 305px;
    text-indent: 40px;
    padding: 0;
  }
  ::placeholder {
    font-family: "Roboto", sans-serif;
    color: #9d9d9d;
    font-size: 14px;
    line-height: 16px;
    padding-left: 10px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 19px;
    }
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
  .dropdown-button {
    background: #fff !important;
    width: 80px;
    height: 49px;
  }
  .dropdown-menu {
    display: flex;
    flex-direction: column;
    span {
      font-family: "Roboto", sans-serif;
      color: #9d9d9d !important;
      text-decoration: none !important;
      border: 0 !important;
      text-align: center;
    }
  }
`;

export const DropdownButton = styled.div`
  width: 30px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 576px) {
    width: 40px;
    height: 34px;
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
  color: #4a4a4a;
  line-height: 30px;
  text-align: center;
  @media (min-width: 576px) {
    line-height: 32px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 49px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  line-height: 30px;
`;

export const CategoryTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #4a4a4a;
  margin: 30px 0;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;
  overflow-x: auto;
  @media (min-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
    overflow-x: initial;
  }
`;
