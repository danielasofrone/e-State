import React from "react";
import * as S from "./applicantsPage.styled";
import { useState, useEffect } from "react";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";
import search from "../../assets/icons/search.svg";
import applicants from "../../applicants.json";

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
      <S.SearchBar>
        <S.Input
          type="text"
          placeholder="Search for applicant"
          // value={searchTerm}
          // onChange={handleChange}
        />

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
      </S.SearchBar>
      <S.CategoryTitle>Appointment set</S.CategoryTitle>
      {/* <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      {/* <S.Grid>
      <S.Card>text</S.Card>
      <S.Card>text</S.Card>
      <S.Card>text</S.Card>
    </S.Grid> */}
    </S.Wrapper>
  );
};

export default ApplicantsPage;
