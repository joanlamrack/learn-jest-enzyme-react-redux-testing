import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import "./setup";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("didnt have a state", () => {
	const wrapper = shallow(<App />);
	expect(wrapper.state).not.toEqual(undefined);
});
