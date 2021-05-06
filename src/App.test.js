import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Movies from "./movies";

test("api testing ", async function () {
  const response = new Movies();
  const data = await response.api();
  expect(data.length).toEqual(10);
});
