import { rest } from 'msw';

// ** mocks external api data
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
const getMockStripePrice =  [
    {
      id: "price_1MeIfWCDSrHORaZX7lcKvh2S",
      object: "price",
      active: true,
      billing_scheme: "per_unit",
      created: 1677073658,
      currency: "nzd",
      custom_unit_amount: null,
      livemode: false,
      lookup_key: null,
      metadata: {},
      nickname: null,
      product: "prod_NP6tgOqEeyQ7HH",
      recurring: null,
      tax_behavior: "unspecified",
      tiers_mode: null,
      transform_quantity: null,
      type: "one_time",
      unit_amount: 7900,
      unit_amount_decimal: "7900",
    },
];
  
// ** mocks internalapi data
const postApiMsgMockResponse = 'Message was posted!! 🛎️';
const getApiMsgMockResponse = 'Message was fetched!! 🛎️';

export const handlers = [
  //** intercepts internal server api endpoints
  rest.post(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(postApiMsgMockResponse));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(getApiMsgMockResponse));
  }),

  //** intercepts external server api endpoints
  rest.get(`${process.env.REACT_APP_API_URL}/test`, (req, res, ctx) => {
    return res(ctx.json(getMockStripePrice));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/products`, (req, res, ctx) => {
    return res(ctx.json(getMockStripeResponse));
  }),
];
