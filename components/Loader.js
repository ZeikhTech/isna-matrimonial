import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = (props) => {
  const { color = "#00acf0" } = props;
  return <BounceLoader color={color} />;
};
export default Loader;