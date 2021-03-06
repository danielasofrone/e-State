import React, { useCallback } from "react";
import * as S from "./applicantsPage.styled";
import { useState, useEffect } from "react";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";
import InfoCard from "../InfoCard/InfoCard";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getRandomColor } from "../utils/shared";

const statusList = [
  { name: "Appointment_Set", title: "Appointment Set" },
  { name: "Property_Viewed", title: "Property Viewed" },
  { name: "Interested", title: "Interested" },
  { name: "Offer_Accepted", title: "Offer Accepted" },
];

const ApplicantsPage = ({ location: { search } }) => {
  const [applicants, setApplicants] = useState({
    status: "loading",
    data: [],
    filteredData: [],
  });

  const filterApplicantsByStatus = useCallback((data, userStatus) => {
    let filteredData = data.filter(({ status }) => status === userStatus);

    return filteredData;
  }, []);

  const filterApplicantsOnSearch = useCallback((data, query) => {
    let filteredData = data.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(query.toLowerCase()) ||
        email.toLowerCase().includes(query.toLowerCase())
    );

    if (query === "") filteredData = data;

    return filteredData;
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(search);

    axios.get("https://e-state-df441.web.app/api/applicants.json").then((res) => {
      let filteredData = res.data;

      for (const data of filteredData) {
        data.color = getRandomColor();
      }
      console.log("Data", filteredData);

      if (query.get("search"))
        filteredData = filterApplicantsOnSearch(res.data, query.get("search"));

      setApplicants({
        status: "finished",
        data: res.data,
        filteredData,
      });
    });
  }, [filterApplicantsOnSearch, search]);

  const onChangeSearchField = ({ target: { value } }) => {
    const filteredData = filterApplicantsOnSearch(applicants.data, value);

    setApplicants({
      ...applicants,
      status: "finished",
      filteredData,
    });
  };

  return (
    <S.Wrapper>
      <SubNavigationBar
        loading={applicants.status === "loading"}
        applicants={applicants.data}
      />
      <S.SearchBarContent>
        <form>
          <S.Input
            type="text"
            placeholder="Search for applicant"
            name="search"
            onChange={onChangeSearchField}
          />
        </form>
      </S.SearchBarContent>

      {statusList.map((statusItem) => (
        <div key={statusItem.name}>
          <S.CategoryTitle>{statusItem.title}</S.CategoryTitle>
          <S.CardsConatiner>
            {filterApplicantsByStatus(
              applicants.filteredData,
              statusItem.name
            ).map((applicant) => (
              <InfoCard
                key={applicant.name}
                name={applicant.name}
                phone={applicant.phone}
                email={applicant.email}
                appointment_date={applicant.appointment_date}
                viewed_date={applicant.viewed_date}
                bid={applicant.bid}
                color={applicant.color}
              />
            ))}
          </S.CardsConatiner>
        </div>
      ))}
    </S.Wrapper>
  );
};

export default withRouter(ApplicantsPage);
