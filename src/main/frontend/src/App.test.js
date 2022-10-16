import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react. This should not be in master/i);
  expect(linkElement).toBeInTheDocument();
});
