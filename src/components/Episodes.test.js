import React from 'react';
import { render, getByText, queryByTestId } from '@testing-library/react';
import Episodes from './Episodes';

test("Mission Form renders properly", () => {
    const mockEpisodes = jest.fn();
  
    const { getByText, queryByText } = render(
      <Episodes episodes={mockEpisodes} />
    );
      expect(getByText(/Season 1/i)).toBeInTheDocument;
  });