import React from "react";
import Todo from "./Todo";

// smoke test
it("renders without crashing", function(){
  render(<Todo />);
});

// snapshot test
it("matches snapshot", function (){
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
})
