import React from "react";
import Find from "./Find";

const Home = (props) => {
  // console.log(props);
  let name = props.name.data;
  console.log(name);
  return (
    <>
      home
      <Find></Find>
    </>
  );
};

export default Home;
