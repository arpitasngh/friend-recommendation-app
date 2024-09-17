import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import based on the relative path

// Basic test to check if the App component renders
test('renders the App component without crashing', () => {
  render(<App />);
  
  // Check for some basic text or element that you know should be in the App component
  // For example, assuming your App component has a heading or specific text:
  const linkElement = screen.getByText(/welcome to the app/i);
  
  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
