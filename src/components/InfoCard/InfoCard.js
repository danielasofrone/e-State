import React from "react";
import * as S from "./infoCard.styled";
import PropTypes from "prop-types";
import moment from "moment";
import { getRandomColor, getInitials } from "../utils/shared";

const InfoCard = ({
  name,
  phone,
  email,
  appointment_date,
  viewed_date,
  bid,
}) => {
  return (
    <S.Card>
      <S.UserInitials style={{ background: getRandomColor(), opacity: " 0.5" }}>
        {getInitials(name)}
      </S.UserInitials>
      <S.UserName>{name}</S.UserName>
      <S.UserPhone>{phone}</S.UserPhone>
      <S.UserEmail>{email}</S.UserEmail>
      {appointment_date && (
        <S.DateLabel>
          Appointment {""}
          {moment(appointment_date).format("D MMMM - hh:mm A")}
        </S.DateLabel>
      )}
      {viewed_date && (
        <S.DateLabel>
          Viewed {""}
          {moment(viewed_date).format("D MMMM - hh:mm A")}
        </S.DateLabel>
      )}
      {bid && <S.BidLabel>BID {bid} &#128;</S.BidLabel>}
    </S.Card>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  appointment_date: PropTypes.string.isRequired,
  viewed_date: PropTypes.string.isRequired,
  bid: PropTypes.string.isRequired,
};

export default InfoCard;
