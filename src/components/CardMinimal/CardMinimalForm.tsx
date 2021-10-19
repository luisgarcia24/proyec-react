import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { makeStyles, Grid, Button, Typography } from '@material-ui/core';
import { Card, CardContent, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: { padding: 15 },
  card: {
    minWidth: 400,
    '& .StripeElement': {
      backgroundColor: 'white',
      margin: '0 0 15px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      padding: '10px 14px',
      borderRadius: 5,
    },
  },
  header: { 
    padding: '16px 16px 0 16px', 
    alignItems: 'center',
  },
}));

const CardMinimalForm = () => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card });

    if (!error && !!paymentMethod) {
      const { id } = paymentMethod;
      const { data } = await axios.post('http://localhost:3001/api/checkout', { 
        id, 
        amount: 10000,
      });
      console.log('data: ', data);
    }
  };

  return (
    <Grid className={classes.root} container justify="center">
      <Card className={classes.card} variant="outlined">
        <Grid className={classes.header} container justify="space-between" alignItems="center">
          <Typography variant="h6">Card Minimal</Typography>
          <Link to="/"><IconButton size="small"><Close /></IconButton></Link>
        </Grid>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    '::placeholder': { color: 'rgba(0, 0, 0, 0.4)' },
                  },
                  invalid: { color: '#9e2146' },
                },
              }}
            />
            <Grid container justify="flex-end">
              <Button 
                variant="contained" 
                color="secondary" 
                type="submit" 
                disabled={!stripe || !elements}
                fullWidth
              >
                Realizar pago
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CardMinimalForm;
