import React from "react";
import * as S from "./infoCard.styled";
import PropTypes from "prop-types";
import moment from "moment";
import { getRandomColor, getInitials } from "../../shared";

const InfoCard = ({ name, phone, email, last_update }) => {
  return (
    <S.Card>
      <S.UserInitials style={{ background: getRandomColor(), opacity: " 0.5" }}>
        {getInitials(name)}
      </S.UserInitials>
      <S.UserName>{name}</S.UserName>
      <S.UserPhone>{phone}</S.UserPhone>
      <S.UserEmail>{email}</S.UserEmail>
      <S.ApplicantLabel>
        Appointment {""}
        {moment(last_update).format("D MMMM - hh:mm A")}
      </S.ApplicantLabel>
    </S.Card>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  last_update: PropTypes.string.isRequired,
};

export default InfoCard;
