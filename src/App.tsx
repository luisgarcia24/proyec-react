import { Link } from 'react-router-dom'
import { makeStyles, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: { padding: 15 },
  menu: { marginBottom: 30 },
  button: { marginBottom: 15 },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="center">
      <Grid className={classes.menu} item xs={4}>
        <Button className={classes.button} variant="contained" fullWidth>
          <Link to="/create-payment">Create Payment</Link>
        </Button>
        <Button className={classes.button} variant="contained" fullWidth>
          <Link to="/stripe-checkout">Stripe Checkout</Link>
        </Button>
        <Button className={classes.button} variant="contained" fullWidth>
          <Link to="/update">Update Users</Link>
        </Button>
      </Grid>
    </Grid>
  )
}

export default App;