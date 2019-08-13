import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe("render", () => {
  test("renders without crashing", () => {});

  test("renders input box", () => {});

  test("renders submit button", () => {});
});

describe("update state", () => {
  test("renders component without error", () => {});

  test("does not render input box", () => {});

  test("does not render submit button", () => {});
});
