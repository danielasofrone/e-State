import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 50px;
  height: 35px;
  top: 0;
  display: flex;
  justify-content: space-between;
  color: #f8f8f8;
  font-family: "Roboto", sans-serif;
  padding: 15px 0;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
  margin-right: ${({ noMargin }) => (noMargin ? "0" : "32px")};
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 21px;
  width: 142px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const ContactSupport = styled.div`
  display: flex;
  margin-right: 32px;
  float: left;
`;

export const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: #4a4a4a;
  padding-left: 10px;
`;
