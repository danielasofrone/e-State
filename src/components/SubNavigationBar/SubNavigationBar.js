import React from "react";
import * as S from "./subNavigationBar.styled";
import back from "../../assets/icons/back.svg";
import applicants from "../../applicants.json";

const SubNavigationBar = () => (
  <S.Container noMargin>
    <S.LeftSide>
      <S.Icon noMargin src={back}></S.Icon>
      <S.Applicants>Applicants</S.Applicants>
    </S.LeftSide>

    <S.RightSide>
      <S.SubNavUnit>
        <S.NumberUnit>{applicants.length}</S.NumberUnit>
        <S.TextUnit>Total</S.TextUnit>
      </S.SubNavUnit>

      <S.SeparatingBorder />

      <S.SubNavUnit>
        <S.NumberUnit>10</S.NumberUnit>
        <S.TextUnit>New</S.TextUnit>
      </S.SubNavUnit>

      <S.SeparatingBorder />

      <S.SubNavUnit>
        <S.NumberUnit>5 </S.NumberUnit>
        <S.TextUnit>Views</S.TextUnit>
      </S.SubNavUnit>

      <S.SeparatingBorder />

      <S.SubNavUnit>
        <S.NumberUnit>3</S.NumberUnit>
        <S.TextUnit>Appointments</S.TextUnit>
      </S.SubNavUnit>

      <S.SeparatingBorder />

      <S.SubNavUnit>
        <S.NumberUnit>4</S.NumberUnit>
        <S.TextUnit>Other</S.TextUnit>
      </S.SubNavUnit>
    </S.RightSide>
  </S.Container>
);

export default SubNavigationBar;
