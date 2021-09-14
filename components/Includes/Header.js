import Link from "next/link";
import Header2 from "./header-after-login";
import Header1 from "./header-befor-login";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function HeaderBeforLogin() {
  
  const authToken = useSelector((state) => state.auth.token);
  // console.log(authToken);
  return (
    <div>
      {authToken?<Header2/>:<Header1 />}
    </div>
  );
}
