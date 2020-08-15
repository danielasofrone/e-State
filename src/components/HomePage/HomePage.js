import React from "react";
import * as S from "./homePage.styled";
import ApplicantsPage from "../ApplicantsPage/ApplicantsPage";
import NavigationBar from "../NavigationBar/NavigationBar";

const HomePage = () => (
  <S.Wrapper>
    <NavigationBar />
    <ApplicantsPage></ApplicantsPage>
  </S.Wrapper>
);

export default HomePage;
