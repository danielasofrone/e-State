import React from "react";
import * as S from "./homePage.styled";
import ApplicantsPage from "../ApplicantsPage/ApplicantsPage";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const HomePage = () => (
  <S.Wrapper>
    <NavigationBar />
    <ApplicantsPage></ApplicantsPage>
    <Footer />
  </S.Wrapper>
);

export default HomePage;
