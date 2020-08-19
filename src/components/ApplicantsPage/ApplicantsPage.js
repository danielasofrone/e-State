import React from "react";
import * as S from "./applicantsPage.styled";
// import { useState, useEffect } from "react";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";
import search from "../../assets/icons/search.svg";
import applicants from "../../applicants.json";
// import { getUserInitials } from "../../shared";

const ApplicantsPage = ({}) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // useEffect(() => {
  //   const results = applicants.filter((applicant) =>
  //     applicant.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
    <S.Wrapper>
      <SubNavigationBar />
      <S.SearchBarContent>
        <S.SearchBar>
          <S.SearchIcon src={search}></S.SearchIcon>
          <S.Input
            type="text"
            placeholder="Search for applicant"
            // value={searchTerm}
            // onChange={handleChange}
          />
        </S.SearchBar>
        <S.DropdownFilters>
          <S.DropdownButton>
            <S.DropdownText>Bids</S.DropdownText>
            <S.Icon noMargin src={arrow_drop_down}></S.Icon>
          </S.DropdownButton>
          <S.DropdownButton>
            <S.DropdownText>Status</S.DropdownText>
            <S.Icon noMargin src={arrow_drop_down}></S.Icon>
          </S.DropdownButton>
        </S.DropdownFilters>
      </S.SearchBarContent>
      <S.CategoryTitle>Appointment set</S.CategoryTitle>
      <S.Grid>
        <S.Card>
          <S.UserInitials>FH</S.UserInitials>
          <S.UserName>Friedrich Heinrich</S.UserName>
          <S.UserPhone>+49 17398470267</S.UserPhone>
          <S.UserEmail>friedlich.heinrich@gmail.com</S.UserEmail>
          <S.ApplicantLabel>Appointment 22 September 2020</S.ApplicantLabel>
        </S.Card>
      </S.Grid>
    </S.Wrapper>
  );
};

export default ApplicantsPage;
