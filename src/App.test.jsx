import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Vite + React');
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/*']}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('URL Not Found');
  });
});
