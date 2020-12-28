import React from "react";
import Find from "./Find";

const Home = (props) => {
  let name = props.name;
  console.log(
    name.map((t) => {
      t.name;
    })
  );

  return (
    <>
      home
      <Find></Find>
    </>
  );
};

export default Home;
