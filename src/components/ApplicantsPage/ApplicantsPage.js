import React, { useCallback } from "react";
import * as S from "./applicantsPage.styled";
import { useState, useEffect } from "react";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";
import InfoCard from "../InfoCard/InfoCard";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import { getUserInitials } from "../../shared";

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

    axios.get("http://localhost:3000/api/applicants.json").then((res) => {
      let filteredData = res.data;

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

        <S.DropdownFilters>
          <S.DropdownButton>
            <S.DropdownText>Bids &#9662;</S.DropdownText>
          </S.DropdownButton>
          <S.DropdownButton>
            <S.DropdownText>Status &#9662;</S.DropdownText>
          </S.DropdownButton>
        </S.DropdownFilters>
      </S.SearchBarContent>

      {statusList.map((statusItem) => (
        <div key={statusItem.name}>
          <S.CategoryTitle>{statusItem.title}</S.CategoryTitle>
          <S.Grid>
            {filterApplicantsByStatus(
              applicants.filteredData,
              statusItem.name
            ).map((applicant) => (
              <InfoCard
                key={applicant.name}
                name={applicant.name}
                phone={applicant.phone}
                email={applicant.email}
                last_update={applicant.last_update}
              />
            ))}
          </S.Grid>
        </div>
      ))}
    </S.Wrapper>
  );
};

export default withRouter(ApplicantsPage);
