import { loadStripe } from '@stripe/stripe-js';
// const url = `${process.env.REACT_APP_API_URL}`;
// const stripe = new Stripe(process.env.STRIPE_TEST_API_KEY);
const priceId = process.env.STRIPE_PRICE_ID;

export const createCheckoutSession = async () => {
  console.log(process.env);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/initCheckout-session`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: 1,
        priceId,
      }),
    }
  );
  return await response.json();
};

export const initCheckout = async (priceId) => {
  const { sessionId } = await createCheckoutSession(priceId);
  const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  await stripe.redirectToCheckout({
    sessionId,
  });
};

export const getProducts = async () => {
  const url = `${process.env.REACT_APP_API_URL}`;

  const response = await fetch(url);
  const product = await response.json();

  // const products = [product];

  return product;
};


