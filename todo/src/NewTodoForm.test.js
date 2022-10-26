import { render, fireEvent, queryByText } from "@testing-library/react";
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

// it("should add a new task", function(){
//   const {getByLabelText} = render(<NewTodoForm />);
//   const input = getByLabelText("Tasks"); // if this doesnt work replace name with tasks 
//   const btn = queryByText("Add Task");
//   fireEvent.change(input, {target: { value: 'go to the dentist'}});
//   fireEvent.click(btn);
//   expect(queryByText('go to the dentist')).toBeInTheDocument();

// })

