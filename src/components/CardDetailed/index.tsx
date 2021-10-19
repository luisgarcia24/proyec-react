import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CardDetailedForm from './CardDetailedForm';

const CardDetailed = () => {
  const ELEMENTS_OPTIONS = {
    fonts: [{ cssSrc: 'https://fonts.googleapis.com/css?family=Roboto' }],
  };

  const stripePromise = loadStripe('pk_test_51Ji0bZJT4R6W55sa6j0OggcYPWFckaMUPevJS90pbhiGJZanPx9IA9ebLmis7JYCDlCPDKJcHisMFsOjAt7GPOUH00YFOD2RQa');

  return (
    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
      <CardDetailedForm />
    </Elements>
  )
}

export default CardDetailed;
