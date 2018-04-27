import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

it("It renders", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
