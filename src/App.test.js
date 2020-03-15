import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';
import App from './App';

test("checks for fetching data", async () => {
    const { getByText } = render(<App />);

    expect(getByText(/fetching data/i)).toBeInDocument;
});