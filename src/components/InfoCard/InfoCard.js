import React from "react";
import * as S from "./infoCard.styled";
import PropTypes from "prop-types";

const InfoCard = ({ name, phone, email, status }) => (
  <S.Card>
    <S.UserInitials>FH</S.UserInitials>
    <S.UserName>{name}</S.UserName>
    <S.UserPhone>{phone}</S.UserPhone>
    <S.UserEmail>{email}</S.UserEmail>
    <S.ApplicantLabel>{status}</S.ApplicantLabel>
  </S.Card>
);

InfoCard.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
};

export default InfoCard;
