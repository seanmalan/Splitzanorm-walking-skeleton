import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {

  test('The header renders', () => {
    render(
        <Header />
    );

    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/cloche/i)).toBeInTheDocument();
    expect(screen.getByText(/splitzanorm/i)).toBeInTheDocument();
  });
});
