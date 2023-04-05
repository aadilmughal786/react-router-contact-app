import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "50px" }}>Opps!</h1>
      <i
        style={{ margin: "5px", fontSize: "20px" }}
      >{`${error.status} - ${error.statusText}`}</i>
    </div>
  );
};

export default NotFound;
