import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 0;
  display: flex;
  justify-content: initial;
  flex-wrap: wrap;
  color: #f8f8f8;
  font-family: "Roboto", sans-serif;
  padding: 15px 0;
  @media (min-width: 576px) {
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  margin-bottom: 25px;
  @media (min-width: 868px) {
    margin-bottom: 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  margin-bottom: 25px;
  overflow-x: auto;
  @media (min-width: 868px) {
    margin-bottom: 0;
    overflow-x: initial;
  }
`;

export const SeparatingBorder = styled.div`
  border-left: 2px solid #e6e6e6;
  height: auto;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 15px;
  cursor: pointer;
  margin-top: 7px;
  @media (min-width: 576px) {
    height: 32px;
    width: 32px;
    margin-top: 0;
  }
`;

export const Applicants = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  color: #4a4a4a;
  margin-right: 20px;
  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SubNavUnit = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  @media (min-width: 576px) {
    margin: 0 15px;
  }
  @media (min-width: 868px) {
    margin: 0 25px;
  }
`;

export const NumberUnit = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #4a4a4a;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const TextUnit = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #4a4a4a;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
