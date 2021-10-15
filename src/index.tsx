import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from "@material-ui/styles";
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import { store } from "./store";
import Admin from './layouts/Admin';

const firebaseConfig = {
  apiKey: "AIzaSyAUBtjNaOUtEcWjuEm_grRaqPQogmsap7Y",
  authDomain: "prueba-crud-1b3bb.firebaseapp.com",
  databaseURL: "https://prueba-crud-1b3bb-default-rtdb.firebaseio.com",
  projectId: "prueba-crud-1b3bb",
  storageBucket: "prueba-crud-1b3bb.appspot.com",
  messagingSenderId: "83392355027",
  appId: "1:83392355027:web:a1e3ecf695d45fa7a69226",
  measurementId: "G-NB5B0D9MM8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const hist = createBrowserHistory();

// @ts-ignore
ReactDOM.render(
  <React.Suspense fallback="loading...">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={hist}>
          <Switch>
            <Route path="/" render={(props) => <Admin {...props} />} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  </React.Suspense>,
  document.getElementById('root')
);

reportWebVitals();
