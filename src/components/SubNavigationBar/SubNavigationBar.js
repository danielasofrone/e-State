import React from "react";
import * as S from "./subNavigationBar.styled";
import * as C from "../NavigationBar/navigationBar.styled";
import back from "../../assets/icons/back.svg";

const SubNavigationBar = () => (
  <C.Wrapper>
    <S.LeftSide>
      <C.Icon src={back}></C.Icon>
      <S.Applicants>Applicants</S.Applicants>
    </S.LeftSide>
    <S.RightSide>
      <S.SubNavUnit>
        <S.NumberUnit>25</S.NumberUnit>
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
        <S.TextUnit>Appointment</S.TextUnit>
      </S.SubNavUnit>

      <S.SeparatingBorder />

      <S.SubNavUnit>
        <S.NumberUnit>4</S.NumberUnit>
        <S.TextUnit>Other</S.TextUnit>
      </S.SubNavUnit>
      <S.SeparatingBorder />
    </S.RightSide>
  </C.Wrapper>
);

export default SubNavigationBar;
