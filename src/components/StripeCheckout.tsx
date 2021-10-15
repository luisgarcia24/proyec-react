import StripeCheckoutButton from './StripeCheckoutButton';

const StripeCheckout = () => {
  const totalPrice = 58;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Make Stripe Payment @ Freaky Jolly</h1>
        <p>Pay Total of $ {totalPrice}</p>
        <p><StripeCheckoutButton price={totalPrice} /></p>
      </header>
    </div>
  )
}

export default StripeCheckout;
