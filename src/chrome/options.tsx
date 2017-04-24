import React from "react";
import ReactDOM from "react-dom";

import { Input } from "../components/input";

const app = (
  <div>
    <h1>Hello World!</h1>

    <Input name="test" />
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
