// import { getMockStripeProduct } from '../__mocks__/handlers';
// import App from "../App"
// import { render, screen } from '@testing-library/react';
// import { getMockProduct as mockProduct } from '../mocks/handlers'

// import {
//   getProducts,
// initCheckout
// createCheckoutSession,
// } from './checkout';

// const product = [
//   {
//     id: 'prod_NP6tgOqEeyQ7HH',
//     object: 'stripestripeProduct',
//     active: true,
//     attributes: [],
//     created: 1677073657,
//     default_price: 'price_1MeIfWCDSrHORaZX7lcKvh2S',
//     description:
//       'The perfect accessory to take your cooking to the next level.',
//     images: [
//       'https://files.stripe.com/links/MDB8YWNjdF8xTWVJZUJDRFNySE9SYVpYfGZsX3Rlc3RfdlZUSXlmbmdONFdFZ1ZXWHlpbE1DTnRM00CHOP97L1',
//     ],
//     livemode: false,
//     metadata: {},
//     name: 'Original Cloche',
//     package_dimensions: null,
//     shippable: null,
//     statement_descriptor: null,
//     tax_code: 'txcd_99999999',
//     type: 'service',
//     unit_label: null,
//     updated: 1677074217,
//     url: null,
//   },
// ];
// const price = [
//   {
//     id: 'price_1MeIfWCDSrHORaZX7lcKvh2S',
//     object: 'price',
//     active: true,
//     billing_scheme: 'per_unit',
//     created: 1677073658,
//     currency: 'nzd',
//     custom_unit_amount: null,
//     livemode: false,
//     lookup_key: null,
//     metadata: {},
//     nickname: null,
//     product: 'prod_NP6tgOqEeyQ7HH',
//     recurring: null,
//     tax_behavior: 'unspecified',
//     tiers_mode: null,
//     transform_quantity: null,
//     type: 'one_time',
//     unit_amount: 7900,
//     unit_amount_decimal: '7900',
//   },
// ];

// describe('checkout', () =>
// {

//   test('Product is displayed from stripe api', async () =>
//   {
//   render(<App />)

//   const url = `${process.env.REACT_APP_API_URL}`;

//   window.fetch.mockResolvedValueOnce({
//     ok: true,
//     json: async () => mockProduct,
//   });

//   const products = await

//   expect(mockProduct).toEqual(products);
// })

//   test('A fetch request to get the products from the product API', async () => {
//     const url = `${process.env.REACT_APP_API_URL}`;
//     window.fetch.mockResolvedValueOnce({
//       ok: true,
//       json: async () => mockProduct,
//     });

//     const products = await getProducts();
//     expect(window.fetch).toHaveBeenCalledWith(url);
//     expect(mockProduct).toEqual(products);
//   });

//   it('GetProducts should make a fetch request to get the products from the product API', async () => {
//   const url = `${process.env.REACT_APP_API_URL}`;
//   window.fetch.mockResolvedValueOnce({
//     ok: true,
//     json: async () => mockProduct,
//   });

//   const products = await getProducts();
//   expect(window.fetch).toHaveBeenCalledWith(url);
//   expect(mockProduct).toEqual(products);
// });
// });
