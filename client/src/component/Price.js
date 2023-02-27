import React, { useState, useEffect } from "react";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_TEST_API_KEY);
const priceId = process.env.STRIPE_PRICE_ID

const Price = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const price = await stripe.prices.retrieve(
        priceId
      );

      console.log(price);
      setPrices(price);
    };

    fetchData();
  }, []);

  console.log(prices);

  const stripePrice = [
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

  const formatPrice = (num) => {
    const number = (num / 100).toFixed(2);
    const dollarSign = '$' + number;
    return dollarSign;

 }

    // const productPrice=(FormatPrice(stripePrice.unit_amount));
    const productPrice=(formatPrice(7900));
    console.log(productPrice);



    // const formatPrice = (amount) => {
    //   const numberFormat = new Intl.NumberFormat("en-NZ", {
    //     style: "currency",
    //     currency: "NZD",
    //     currencyDisplay: "symbol",
    //   });
    //   const total = amount / 100;
    //   return numberFormat.format(total);
    // };
    // const productPrice=(formatPrice(stripePrice.unit_amount));
    // export default formatAmount;

  return (
    <>
      <ul className="">
        {stripePrice.map((stripePrice) => {
          return (
            <div key={stripePrice.id}>
              <p>{productPrice}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Price;