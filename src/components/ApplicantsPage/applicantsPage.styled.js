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
  flex-direction: row;
`;

export const SearchBar = styled.div`
  width: 160px;
  height: 24px;
  display: flex;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  @media (min-width: 576px) {
    width: 200px;
    height: 26px;
  }
  @media (min-width: 768px) {
    width: 305px;
    height: 45px;
  }
`;

export const SearchIcon = styled.img`
  width: 25px;
  right: auto;
  margin-left: 20px;
`;

export const Input = styled.input`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #9d9d9d;
  padding: 5px 0;
  border: none;

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

export const Grid = styled.div`
  width: 100%;
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
  min-height: 305px;
  min-height: 241px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  float: left;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const UserInitials = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  width: 60px;
  height: 60px;
  background-color: #e3e7f9;
  border-radius: 50%;
  display: flex;
  margin: 0 auto 10px auto;
  justify-content: center;
  align-items: center;
  color: #405493;
  font-size: 14;
`;

export const UserName = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 10px;
`;

export const UserPhone = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 10px;
`;

export const UserEmail = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 10px;
`;

export const ApplicantLabel = styled.div`
  min-width: 165px;
  height: 20px;
  text-align: center;
  padding: 5px 10px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  background: #9d9d9d;
  border-radius: 3px;
  margin: 0 auto;
`;
