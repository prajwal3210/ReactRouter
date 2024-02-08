import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <>
      <h2 className=" text-center text-3xl">User : {id}</h2>
    </>
  );
}

export default User;
User;
