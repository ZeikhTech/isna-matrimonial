import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";

const MyInput = (props) => {
  return (
    <FormGroup>
      <Input {...props} className="form-control" />
    </FormGroup>
  );
};

export default MyInput;
