import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';


// smoke test
it("renders without crashing", function(){
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", function (){
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it("should add a new task", function(){
  const {queryByText, getByLabelText} = render(<TodoList />);
  expect(queryByText('hiking')).not.toBeInTheDocument();
})

