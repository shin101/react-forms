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


  // if you add a new task will it correctly show on the page? 
  const input = getByLabelText("Tasks"); 
  const btn = queryByText("Add Task");
  fireEvent.change(input, {target: { value: 'go to the dentist'}});
  fireEvent.click(btn);
  expect(queryByText('go to the dentist')).toBeInTheDocument();
})

