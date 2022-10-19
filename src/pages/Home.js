import React from "react";
import Main from "../components/Main";
import requests from "../Requests";
import Row from "../components/Row";

const Home = () => {
  return (
    <div>
      <Main></Main>
      <Row rowId="1" title="UpComing" fetchURL={requests.requestUpcoming}></Row>
      <Row rowId="2" title="Horror" fetchURL={requests.requestHorror}></Row>
      <Row
        rowId="3"
        trowId="1"
        title="Top Rated"
        fetchURL={requests.requestTopRated}
      ></Row>
      <Row rowId="4" title="Trending" fetchURL={requests.requestTrending}></Row>
    </div>
  );
};

export default Home;
