import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from './Box';

// smoke test
it("renders without crashing", function() {
  render(<Box />);
});

// snapshot
it("matches snapshot", function(){
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
})

// see if delete button works correctly
it("deletes a box correctly", function(){
  const mockRemove = jest.fn();
  const { queryByText } = render(<Box remove={mockRemove} />);
  const btn = queryByText("X");
  fireEvent.click(btn);
  expect(mockRemove).toHaveBeenCalled();
})