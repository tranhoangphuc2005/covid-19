import React from "react";
import Find from "./Find";

const Home = (props) => {
  console.log(props.name.name);

  return (
    <>
      home
      <Find></Find>
    </>
  );
};

export default Home;
