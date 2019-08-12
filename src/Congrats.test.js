import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

it("renders without crashing", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

it("renders no text when `success` if false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(wrapper.text()).toBe("");
});

it("renders renders non empty congrats message when `success` is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "component-message");
  expect(message.text().length).not.toBe(0);
});

it("does not throw an error when given proper prop types", () => {
  const expectedProps = { success: false };
  const propError = checkProps(Congrats, expectedProps);
  expect(propError).toBeUndefined();
});
