import React from "react";
import * as S from "./applicantsPage.styled";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";

const ApplicantsPage = () => (
  <S.Wrapper>
    <SubNavigationBar />
    <S.SearchBar />
    <S.CategoryTitle>Appointment set</S.CategoryTitle>
    <S.Grid>
      <S.Card>text</S.Card>
      <S.Card>text</S.Card>
      <S.Card>text</S.Card>
    </S.Grid>
  </S.Wrapper>
);

export default ApplicantsPage;
