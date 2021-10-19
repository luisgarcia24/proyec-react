import { makeStyles, Button, Grid, Typography } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";

const useStyles = makeStyles(() => ({
  content: {
    height: '100vh',
  },
  form: { 
    padding: 15,
    border: '1px solid gray',
    minWidth: 500
  }
}));

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
  const classes = useStyles();
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
    <Grid className={classes.content} container justify="center" alignItems="center">
      <Grid className={classes.form} item>
        <Typography variant="h4" gutterBottom>Formulario Stripe</Typography>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <Button variant="contained" color="secondary" onClick={handleSubmit(stripe, elements)}>
          Comprar
        </Button>
      </Grid>
    </Grid>
  )
}

export default PaymentForm;
