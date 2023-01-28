import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";
import Admin from "./layouts/Admin";

const history = createBrowserHistory();

// @ts-ignore
ReactDOM.render(
  <React.Suspense fallback="loading...">
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/" render={(props) => <Admin />} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Suspense>,
  document.getElementById('root')
);

reportWebVitals();
