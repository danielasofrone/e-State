import styled from "styled-components";

export const Card = styled.div`
  min-width: 220px;
  min-height: 193px;
  margin:  20px 0;
  border-radius: 2px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  float: left;
  padding: 32px;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    min-width: 305px;
    min-height: 241px;
    margin: 20px;
  }
`;

export const UserInitials = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  margin: 0 auto 10px auto;
  justify-content: center;
  align-items: center;
  color: #fff;
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

export const DateLabel = styled.div`
  min-width: 165px;
  height: 20px;
  text-align: center;
  padding: 3px 5px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #efefef;
  background: #9d9d9d;
  border-radius: 3px;
  margin: 0 auto;
`;

export const BidLabel = styled.div`
  min-width: 165px;
  height: 20px;
  text-align: center;
  padding: 3px 5px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #efefef;
  background: #feb902;
  border-radius: 3px;
  margin: 10px auto 0 auto;
`;
