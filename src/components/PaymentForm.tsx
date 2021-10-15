import { Button, Typography } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
      border: 'solid',
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (stripe: Stripe | null, elements: StripeElements | null) => async () => {
    if (!!stripe && !!elements) {
      const cardElement: any = elements.getElement(CardElement);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        // ... POST: /api/charge/user  
      }
    }
  }
  
  return (
    <>
      <Typography variant="h4" gutterBottom>Stripe form</Typography>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <Button variant="contained" color="primary" onClick={handleSubmit(stripe, elements)}>
        Comprar
      </Button>
    </>
  )
}

export default PaymentForm;
