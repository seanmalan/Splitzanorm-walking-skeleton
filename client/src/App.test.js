import React from 'react';
import { getMockStripeResponse as mockProduct } from './mocks/handlers';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    // ** what goes here?
  });

  test('The app renders as expected', () => {
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });

  test('All stripe product elements are rendered', async () => {
    render(<App />);
    await waitFor(() => {
      mockProduct.forEach((product) => {
        expect(
          screen.getByRole('cell', { name: product.description })
        ).toBeInTheDocument();
      });
    });
  });

  test('A stripe product is added to cart', async () => {
    await waitFor(() => {
      mockProduct.forEach((product) => {
        expect(
          screen.getByRole('cell', { name: product.description })
        ).toBeInTheDocument();
      });
    });

    const stripeProduct = screen
      .getByText(mockProduct.description)
      .closest('div');

    const buyNowButton = within(stripeProduct).getByRole('button', {
      name: /buy now/i,
    });
    userEvent.click(buyNowButton);

    await waitFor(() => {
      expect(
        screen.queryByRole('cell', { name: mockProduct.description })
      ).not.toBeInTheDocument();
    });
  });
});
