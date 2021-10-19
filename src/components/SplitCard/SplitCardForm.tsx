import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StripeError, PaymentMethod } from '@stripe/stripe-js';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { makeStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
import { Card, CardContent, IconButton } from '@material-ui/core';
import { Result, ErrorResult } from '../../util';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: { padding: 15 },
  header: { 
    padding: '16px 16px 0 16px', 
    alignItems: 'center',
  },
  form: {
    '& .StripeElement': {
      backgroundColor: 'white',
      margin: '0 0 15px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      padding: '10px 14px',
      borderRadius: 5,
    },
    '& .MuiFormControl-root': {
      backgroundColor: 'white',
      margin: '0 0 15px',
    }
  },
}));

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: 'rgba(0, 0, 0, 0.87)',
      letterSpacing: '0.025em',
      '::placeholder': { color: 'rgba(0, 0, 0, 0.4)' },
    },
    invalid: { color: '#9e2146' },
  },
};

const SplitCardForm = () => {
  const classes = useStyles();
  const elements = useElements();
  const stripe = useStripe();
  const [name, setName] = useState('');
  const [postal, setPostal] = useState('');
  const [errorMessage, setErrorMessage] = useState<StripeError | string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardNumberElement);

    if (card == null) return;

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: {
        name,
        address: {
          postal_code: postal,
        },
      },
    });

    if (payload.error && payload.error.message) {
      console.log('[error]', payload.error);
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
    } else if (payload.paymentMethod) {
      console.log('[PaymentMethod]', payload.paymentMethod);
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);
    }
  };

  return (
    <Grid className={classes.root} container justify="center">
      <Card variant="outlined">
        <Grid className={classes.header} container justify="space-between" alignItems="center">
          <Typography variant="h6">Split Card</Typography>
          <Link to="/"><IconButton size="small"><Close /></IconButton></Link>
        </Grid>
        <CardContent>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Typography>Full Name</Typography>
            <TextField
              id="name"
              size="small"
              variant="outlined"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
            
            <Typography>Card Number</Typography>
            <CardNumberElement
              id="cardNumber"
              // @ts-ignore
              // onBlur={logEvent('blur')}
              // @ts-ignore
              // onFocus={logEvent('focus')}
              // onChange={logEvent('change')}
              // onReady={logEvent('ready')}
              options={ELEMENT_OPTIONS}
            />

            <Typography>Card Expiration</Typography>
            <CardExpiryElement
              id="expiry"
              // @ts-ignore
              // onBlur={logEvent('blur')}
              // @ts-ignore
              // onFocus={logEvent('focus')}
              // onChange={logEvent('change')}
              // onReady={logEvent('ready')}
              options={ELEMENT_OPTIONS}
            />

            <Typography>CVC</Typography>
            <CardCvcElement
              id="cvc"
              // @ts-ignore
              // onBlur={logEvent('blur')}
              // @ts-ignore
              // onFocus={logEvent('focus')}
              // onChange={logEvent('change')}
              // onReady={logEvent('ready')}
              options={ELEMENT_OPTIONS}
            />

            <Typography>Postal Code</Typography>
            <TextField
              id="postal"
              size="small"
              variant="outlined"
              placeholder="Postal Code"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              fullWidth
              required
            />
            {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
            {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>}
            <Button variant="contained" color="secondary" type="submit" disabled={!stripe} fullWidth>
              Pay
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SplitCardForm;
