import React from "react";
import ReadBook from "../modules/home/containers/ReadBook";
import HomeLayoutContainer from "../modules/layout/components/HomeLayout.container";

const ReadBookPage = () => {
  return (
    <React.Fragment>
      <HomeLayoutContainer>
        <ReadBook />
      </HomeLayoutContainer>
    </React.Fragment>
  );
};

export default ReadBookPage;
