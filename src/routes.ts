import CreatePayment from './components/CreatePayment';
import App from './App';

const dashRoutes = [
  {
    path: "/",
    name: "Menu",
    icon: "business_bank",
    component: App,
    layout: "/admin",
    menu: true,
    permission: "menuHome",
  },
  {
    path: "/create-payment",
    name: "Create Payment",
    icon: "business_bank",
    component: CreatePayment,
    layout: "/admin",
    menu: true,
    permission: "menuHome",
  },
];

export default dashRoutes;
