import React from "react";
import NewTodoForm from "./NewTodoForm";

// smoke test
it("renders without crashing", function(){
  render(<NewTodoForm />);
});

// snapshot test
it("matches snapshot", function (){
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
})

