import React from 'react';
import { render, fireEvent, queryByText } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';


// smoke test
it("renders without crashing", function() {
  render(<NewBoxForm />);
});

// snapshot
it("matches snapshot", function(){
  const {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
})

it("adds a new colorbox correctly", function(){
  const mockAddColor = jest.fn();
  const { queryByText } = render(<NewBoxForm addBox={mockAddColor} />);
  const btn = queryByText("Add a colorbox");
  fireEvent.click(btn);
  expect(mockAddColor).toHaveBeenCalled();
})