import React, { Component } from "react";

import { Input } from "./input";

import "../styles/form.scss";

class Form extends Component<{}, {}> {
  public render() {
    return (
      <form className="form">
        <Input name="testes" />
      </form>
    );
  }
}

export { Form };
