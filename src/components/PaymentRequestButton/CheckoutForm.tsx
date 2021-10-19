import { useState, useEffect } from 'react';
import { PaymentMethod } from '@stripe/stripe-js';
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';
import { Result, ErrorResult } from '../../util';
import NotAvailableResult from './NotAvailableResult';

const CheckoutForm = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null | any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [notAvailable, setNotAvailable] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 100,
      },
    });

    pr.on('paymentmethod', async (event) => {
      setPaymentMethod(event.paymentMethod);
      event.complete('success');
    });

    pr.canMakePayment().then((canMakePaymentRes) => {
      if (canMakePaymentRes) setPaymentRequest(pr);
      else setNotAvailable(true);
    });
  }, [stripe]);

  return (
    <form>
      {paymentRequest && (
        <PaymentRequestButtonElement
          onClick={(event) => {
            if (paymentMethod) {
              event.preventDefault();
              setErrorMessage(
                'You can only use the PaymentRequest button once. Refresh the page to start over.'
              );
            }
          }}
          // @ts-ignore
          options={{...ELEMENT_OPTIONS, paymentRequest }}
        />
      )}
      {notAvailable && <NotAvailableResult />}
      {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
      {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>}
    </form>
  );
}

export default CheckoutForm;
