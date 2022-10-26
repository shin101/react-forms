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

it("submits new task correctly", function (){
  const mockAddTask = jest.fn();
  const { queryByText } = render(<NewTodoForm addTask={mockAddTask}/>);
  // eslint-disable-next-line
  const btn = queryByText("Add Task");
  fireEvent.click(btn);
  expect(mockAddTask).toHaveBeenCalled();
})


