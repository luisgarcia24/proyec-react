import { useState } from 'react';
import { PaymentMethod, StripeError } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import ErrorMessage from './ErrorMessage';
import SubmitButton from './SubmitButton';
import ResetButton from './ResetButton';
import CardField from './CardField';
import Field from './Field';

const CardDetailedForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<StripeError | null>(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    phone: '',
    name: '',
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (card == null)  return;

    if (error) {
      card.focus();
      return;
    }

    if (cardComplete) setProcessing(true);

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) setError(payload.error);
    else setPaymentMethod(payload.paymentMethod);
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({email: '', phone: '', name: ''});
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e: any) => {
            setBillingDetails({...billingDetails, name: e.target.value});
          }}
          required
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="janedoe@gmail.com"
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({...billingDetails, email: e.target.value});
          }}
          required
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({...billingDetails, phone: e.target.value});
          }}
          required
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e: any) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pay $25
      </SubmitButton>
    </form>
  )
}

export default CardDetailedForm;
