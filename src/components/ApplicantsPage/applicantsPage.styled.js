import styled from "styled-components";

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
  height: 35px;
  padding: 2px;
  background-image: url(/icons/search.svg);
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

export const CategoryTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #4a4a4a;
  margin: 30px 0;
`;

export const CardsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

@media (min-width: 768px) {
  flex-direction: row;
  }
`;
