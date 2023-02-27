import React from 'react';
import // getMockStripeProduct as mockProduct,
// getMockStripePrice as mockPrice,
// postToApiMsg,
// getFromApiMsg,
'./mocks/handlers';
import {
  screen,
  render,
  // waitFor,
  // within
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    // ** ??
  });
  afterEach(() => {
    // ** ??
  });

  test('The app renders as expected', () => {
    render(<App />);
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });

  // test('All product elements are rendered', async () => {
  //   render(<App />);
  //   await waitFor(() => {
  //     mockProduct.forEach((product) => {
  //       expect(
  //         screen.getByRole('', { name: product.description })
  //       ).toBeInTheDocument();
  //     });
  //   });
  // });

  // test('A stripe product is...', async () => {
  //   await waitFor(() => {
  //     mockProduct.forEach((product) => {
  //       expect(
  //         screen.getByRole('cell', { name: product.description })
  //       ).toBeInTheDocument();
  //     });
  //   });

  //   const stripeProduct = screen.getByText(mockProduct.description);
  //   expect(stripeProduct).toHaveTextContent('');

  //   const buyNowButton = within(stripeProduct).getByRole('button', {
  //     name: /buy now/i,
  //   });
  //   userEvent.click(buyNowButton);

  //   await waitFor(() => {
  //     expect(
  //       screen.queryByRole('cell', { name: mockProduct.description })
  //     ).not.toBeInTheDocument();
  //   });
  // });
});
