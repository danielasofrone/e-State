import React from "react";
import * as S from "./applicantsPage.styled";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";

const ApplicantsPage = () => (
  <S.Wrapper>
    <S.ElementsContainer>
      <SubNavigationBar />
      <S.SearchBar />
    </S.ElementsContainer>
  </S.Wrapper>
);

export default ApplicantsPage;
