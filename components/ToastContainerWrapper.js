import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerWrapper=  (props) => {
  return <ToastContainer hideProgressBar={true} closeButton={false} />;
};
export default ToastContainerWrapper;