import React from "react";
import ReactDOM from "react-dom";

import { Form } from "../components/form";

import "bulma";

const app = (
  <div>
    <h1>Hello World!</h1>

    <Form />
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
