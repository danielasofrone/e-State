import styled from "styled-components";

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
  margin-right: ${({ noMargin }) => (noMargin ? "0" : "32px")};
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
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
`;

export const TextUnit = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #4a4a4a;
`;
