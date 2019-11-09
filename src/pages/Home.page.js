import React from "react";
import ListBookClaim from "../modules/home/containers/ListBookClaim";
import HomeLayoutContainer from "../modules/layout/components/HomeLayout.container";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeLayoutContainer>
        <ListBookClaim />
      </HomeLayoutContainer>
    </React.Fragment>
  );
};

export default HomePage;
