import { makeStyles, Grid } from "@material-ui/core";
import ButtonOlab from "./components/ButtonOlab";

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
        <ButtonOlab>
          Button Olab
        </ButtonOlab>
      </Grid>
    </Grid>
  )
}

export default App;
