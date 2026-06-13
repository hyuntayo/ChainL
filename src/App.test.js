// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainL title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainL/i);
    expect(titleElement).toBeInTheDocument();
});
