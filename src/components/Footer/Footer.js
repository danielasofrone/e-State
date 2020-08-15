import React from "react";
import * as S from "./footer.styled";

const Footer = () => (
  <S.Wrapper>
    <S.TextContainer>
      <S.Text>Terms and conditions</S.Text>
      <S.DecorationDot>&#9679;</S.DecorationDot>
      <S.Text>Data protection</S.Text>
      <S.DecorationDot>&#9679;</S.DecorationDot>
      <S.Text>Impressum</S.Text>
    </S.TextContainer>
  </S.Wrapper>
);

export default Footer;
