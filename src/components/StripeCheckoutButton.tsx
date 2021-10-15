import React, { FC } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface IProps {
  price: number
}

const StripeCheckoutButton: FC<IProps> = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Ji0bZJT4R6W55sa6j0OggcYPWFckaMUPevJS90pbhiGJZanPx9IA9ebLmis7JYCDlCPDKJcHisMFsOjAt7GPOUH00YFOD2RQa';

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Fundación el Origen'
      billingAddress
      shippingAddress
      image='/image/olab.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
