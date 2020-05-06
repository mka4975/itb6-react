import * as React from "react";
import Pagination from "./Pagination";
import { shallow } from "enzyme";

const nextSpy = jest.fn();
const lastSpy = jest.fn();

const defaultProps = {
  next: nextSpy,
  last: lastSpy,
  numberOfPages: 10,
  currentPage: 1,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setup = (): any => {
  return shallow(<Pagination {...defaultProps} />);
};

describe("The Pagination component", () => {
  afterEach(() => {
    nextSpy.mockClear();
    lastSpy.mockClear();
  });

  test("renders the current page correctly", () => {
    const component = setup();
    expect(component.find("span").text()).toContain("2");
  });

  test("renders the number of pages correctly", () => {
    const component = setup();
    expect(component.find("span").text()).toContain("10");
  });

  test("triggers last if the left button is clicked", () => {
    const component = setup();
    component.find("Button").first().simulate("click");
    expect(lastSpy).toHaveBeenCalledTimes(1);
  });

  test("triggers next if the right button is clicked", () => {
    const component = setup();
    component.find("Button").last().simulate("click");
    expect(nextSpy).toHaveBeenCalledTimes(1);
  });
});
