import { rest } from 'msw';

// ** mocks internalapi data
const postToApiMsg = 'Message was posted!! 🛎️';
const getFromApiMsg = 'Message was fetched!! 🛎️';

// ** mocks external api data
const getMockStripeProduct = [
  {
    id: 'prod_NP6tgOqEeyQ7HH',
    object: 'stripestripeProduct',
    active: true,
    attributes: [],
    created: 1677073657,
    default_price: 'price_1MeIfWCDSrHORaZX7lcKvh2S',
    description:
      'The perfect accessory to take your cooking to the next level.',
    images: [
      'https://files.stripe.com/links/MDB8YWNjdF8xTWVJZUJDRFNySE9SYVpYfGZsX3Rlc3RfdlZUSXlmbmdONFdFZ1ZXWHlpbE1DTnRM00CHOP97L1',
    ],
    livemode: false,
    metadata: {},
    name: 'Original Cloche',
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: 'txcd_99999999',
    type: 'service',
    unit_label: null,
    updated: 1677074217,
    url: null,
  },
];

const getMockStripePrice = [
  {
    id: 'price_1MeIfWCDSrHORaZX7lcKvh2S',
    object: 'price',
    active: true,
    billing_scheme: 'per_unit',
    created: 1677073658,
    currency: 'nzd',
    custom_unit_amount: null,
    livemode: false,
    lookup_key: null,
    metadata: {},
    nickname: null,
    product: 'prod_NP6tgOqEeyQ7HH',
    recurring: null,
    tax_behavior: 'unspecified',
    tiers_mode: null,
    transform_quantity: null,
    type: 'one_time',
    unit_amount: 7900,
    unit_amount_decimal: '7900',
  },
];

export const handlers = [
  //** intercepts internal server api endpoints

  rest.post(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(postToApiMsg));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(getFromApiMsg));
  }),

  //** intercepts client to server api endpoints
  rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
    return res(ctx.json(getMockStripePrice));
  }),

  rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
    return res(ctx.json(getMockStripeProduct));
  }),
];

  //** intercepts custom checkout endpoints
  rest.post(
    `${process.env.REACT_APP_API_URL}/checkout-session`,
    (req, res, ctx) => {
      return res(ctx.json(getMockStripeProduct));
    }
  )