import React from "react";
import * as S from "./navigationBar.styled";
import menu_link from "../../assets/icons/menu_link.svg";
import logo from "../../assets/icons/logo.png";
import contact_support from "../../assets/icons/contact_support.svg";
import active from "../../assets/icons/active.svg";
import user from "../../assets/icons/user.svg";
import power_settings from "../../assets/icons/power_settings.svg";

const NavigationBar = () => (
  <S.Wrapper>
    <S.Left>
      <S.Icon src={menu_link}></S.Icon>
      <S.Logo src={logo}></S.Logo>
    </S.Left>
    <S.Right>
      <S.ContactSupport>
        <S.Icon noMargin src={contact_support}></S.Icon>
        <S.Text> Contact Support</S.Text>
      </S.ContactSupport>
      <S.Icon src={active}></S.Icon>
      <S.Icon src={user}></S.Icon>
      <S.Icon noMargin src={power_settings}></S.Icon>
    </S.Right>
  </S.Wrapper>
);

export default NavigationBar;
