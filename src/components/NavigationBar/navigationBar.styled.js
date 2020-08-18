import styled from "styled-components";

export const Wrapper = styled.div`
  margin: ${({ noMargin }) => (noMargin ? "0" : "0 50px")};
  height: 35px;
  top: 0;
  display: flex;
  justify-content: space-between;
  color: #f8f8f8;
  font-family: "Roboto", sans-serif;
  padding: 15px 0;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div``;

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: ${({ noMargin }) => (noMargin ? "0" : "7px")};
  cursor: pointer;
  @media (min-width: 576px) {
    height: 24px;
    width: 24px;
    margin-right: ${({ noMargin }) => (noMargin ? "0" : "20px")};
  }
  @media (min-width: 768px) {
    height: 28px;
    width: 28px;
    margin-right: ${({ noMargin }) => (noMargin ? "0" : "28px")};
  }
  @media (min-width: 868px) {
    height: 32px;
    width: 32px;
    margin-right: ${({ noMargin }) => (noMargin ? "0" : "32px")};
  }
`;

export const Logo = styled.img`
  height: 10px;
  width: 75px;
  margin-bottom: 3px;
  cursor: pointer;
  @media (min-width: 576px) {
    height: 16px;
    width: 100px;
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    height: 21px;
    width: 142px;
    margin-bottom: 5px;
  }
`;

export const ContactSupport = styled.div`
  display: flex;
  margin-right: 7px;
  float: left;
  @media (min-width: 576px) {
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    margin-right: 28px;
  }
  @media (min-width: 868px) {
    margin-right: 32px;
  }
`;

export const Text = styled.div`
  display: none;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: #4a4a4a;
  padding-left: 10px;
  @media (min-width: 868px) {
    display: block;
  }
`;
