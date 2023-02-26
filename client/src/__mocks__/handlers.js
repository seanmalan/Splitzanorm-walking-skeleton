import { rest } from 'msw';

export const getMockStripeResponse = [
  {
    id: 'prod_NP6tgOqEeyQ7HH',
    object: 'stripeProduct',
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

const postApiMsgMockResponse = 'Message was posted!! 🛎️';
const getApiMsgMockResponse = 'Message was fetched!! 🛎️';

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(postApiMsgMockResponse));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(getApiMsgMockResponse));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/products`, (req, res, ctx) => {
    return res(ctx.json(getMockStripeResponse));
  }),
];
