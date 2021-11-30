/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable arrow-body-style */
import React from "react";
import { render } from "@testing-library/react";

import Button from "./button";

describe("button", () => {
  it("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});
