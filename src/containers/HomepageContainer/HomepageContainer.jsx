import React from "react";
import { useSelector } from "react-redux";

const HomepageContainer = ({ data }) => {
  const state = useSelector((state) => (state ? state.root : []));
  console.log("state: ", state);
  return (
    <div>
      <h1>{data.header}</h1>
      <p>{data.welcomeMsg}</p>
    </div>
  );
};

export default HomepageContainer;
