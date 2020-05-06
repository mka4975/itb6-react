import * as React from "react";
import { mount } from "enzyme";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setup = (): any => {
  return mount(<App />);
};

describe("The App component", () => {
  test("displays the first ten items of the data", () => {
    const component = setup();

    const tableRows = component.find("tbody tr");

    expect(tableRows.length).toBe(10);
    expect(tableRows.first().find("td").first().text()).toBe("Person 0");
    expect(tableRows.last().find("td").first().text()).toBe("Person 9");
  });

  test("displays the second ten items after the next button is clicked", () => {
    const component = setup();

    component.find("Button").last().simulate("click");

    const tableRows = component.find("tbody tr");

    expect(tableRows.length).toBe(10);
    expect(tableRows.first().find("td").first().text()).toBe("Person 10");
    expect(tableRows.last().find("td").first().text()).toBe("Person 19");
  });

  test("displays again the first ten items after the next and the last button are clicked after each other", () => {
    const component = setup();

    component.find("Button").last().simulate("click");
    component.find("Button").first().simulate("click");

    const tableRows = component.find("tbody tr");

    expect(tableRows.length).toBe(10);
    expect(tableRows.first().find("td").first().text()).toBe("Person 0");
    expect(tableRows.last().find("td").first().text()).toBe("Person 9");
  });

  test("displays still the first ten items if the last button is clicked on page one", () => {
    const component = setup();

    component.find("Button").first().simulate("click");

    const tableRows = component.find("tbody tr");

    expect(tableRows.length).toBe(10);
    expect(tableRows.first().find("td").first().text()).toBe("Person 0");
    expect(tableRows.last().find("td").first().text()).toBe("Person 9");
  });

  test("displays still the last ten items if the next button is hit to often", () => {
    const component = setup();

    component.find("Button").last().simulate("click");
    component.find("Button").last().simulate("click");
    component.find("Button").last().simulate("click");
    component.find("Button").last().simulate("click");

    const tableRows = component.find("tbody tr");

    expect(tableRows.length).toBe(5);
    expect(tableRows.first().find("td").first().text()).toBe("Person 30");
    expect(tableRows.last().find("td").first().text()).toBe("Person 34");
  });
});
