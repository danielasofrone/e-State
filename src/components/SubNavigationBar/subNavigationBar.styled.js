import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  white-space: normal;
`;
export const LeftSide = styled.div`
  display: flex;
`;

export const RightSide = styled.div`
  display: flex;
`;

export const SeparatingBorder = styled.div`
  border: 1px solid #e6e6e6;
  transform: rotate(90deg);
  width: 44px;
  height: 0px;
  margin-top: 20px;
`;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 15px;
  cursor: pointer;
`;

export const Applicants = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #4a4a4a;
`;

export const SubNavUnit = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumberUnit = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4a4a4a;
  @media (min-width: 868px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const TextUnit = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: #4a4a4a;
  @media (min-width: 868px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
