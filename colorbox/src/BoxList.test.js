import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';


// smoke test
it("renders without crashing", function() {
  render(<BoxList />);
});

// snapshot
it("matches snapshot", function(){
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})

it("should not allow a user to delete anything when there is no box", function(){
  const {queryByText} = render(<BoxList />);

  expect(queryByText("X")).not.toBeInTheDocument();

});