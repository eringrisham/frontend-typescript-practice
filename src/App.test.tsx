import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { unmountComponentAtNode } from "react-dom";

let container: Element | DocumentFragment | null = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
  container = null;
});

it('renders search bars', () => {
  act(() => {
    render(<App />);
  })
  const nameSearchBar = screen.getByPlaceholderText(/Search by name/);
  expect(nameSearchBar).toBeInTheDocument();

  const tagSearchBar = screen.getByPlaceholderText(/Search by tag/);
  expect(tagSearchBar).toBeInTheDocument();
});
