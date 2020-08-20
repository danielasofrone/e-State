import React from "react";
import * as S from "./subNavigationBar.styled";
import back from "../../assets/icons/back.svg";

const SubNavigationBar = ({ applicants, loading }) => {
  if (loading) return "loading";
  return (
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
          <S.NumberUnit>
            {applicants.filter(({ status }) => status === "Interested").length}
          </S.NumberUnit>

          <S.TextUnit>New</S.TextUnit>
        </S.SubNavUnit>

        <S.SeparatingBorder />

        <S.SubNavUnit>
          <S.NumberUnit>
            {
              applicants.filter(({ status }) => status === "Property_Viewed")
                .length
            }
          </S.NumberUnit>
          <S.TextUnit>Views</S.TextUnit>
        </S.SubNavUnit>

        <S.SeparatingBorder />

        <S.SubNavUnit>
          <S.NumberUnit>
            {
              applicants.filter(({ status }) => status === "Appointment_Set")
                .length
            }
          </S.NumberUnit>
          <S.TextUnit>Appointments</S.TextUnit>
        </S.SubNavUnit>

        <S.SeparatingBorder />

        <S.SubNavUnit>
          <S.NumberUnit>
            {
              applicants.filter(({ status }) => status === "Offer_Accepted")
                .length
            }
          </S.NumberUnit>
          <S.TextUnit>Other</S.TextUnit>
        </S.SubNavUnit>
      </S.RightSide>
    </S.Container>
  );
};

export default SubNavigationBar;
