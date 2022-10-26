import React from "react";
import Todo from "./Todo";
import { render, fireEvent } from "@testing-library/react";

// smoke test
it("renders without crashing", function(){
  render(<Todo />);
});

// snapshot test
it("matches snapshot", function (){
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
})


  // see if delete button works correctly
  it("deletes a task correctly", function (){
    const mockRemove = jest.fn();
    const { queryByText } = render(<Todo remove={mockRemove}/>);
    // eslint-disable-next-line
    const btn = queryByText("X");
    fireEvent.click(btn);
    expect(mockRemove).toHaveBeenCalled();
  })

