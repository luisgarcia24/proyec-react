import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const PaymentRequestButton = () => {
  const stripePromise = loadStripe('pk_test_51Ji0bZJT4R6W55sa6j0OggcYPWFckaMUPevJS90pbhiGJZanPx9IA9ebLmis7JYCDlCPDKJcHisMFsOjAt7GPOUH00YFOD2RQa');

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default PaymentRequestButton;
