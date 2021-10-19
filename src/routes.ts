import App from './App';
import CardMinimal from './components/CardMinimal';
import CardDetailed from './components/CardDetailed';
import SplitCard from './components/SplitCard';
import PaymentRequestButton from './components/PaymentRequestButton';


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
    path: "/card-minimal",
    name: "Card Minimal",
    icon: "",
    component: CardMinimal,
    layout: "",
    menu: true,
    permission: "",
  },
  {
    path: "/card-detailed",
    name: "Card Detailed",
    icon: "",
    component: CardDetailed,
    layout: "",
    menu: true,
    permission: "",
  },
  {
    path: "/split-card",
    name: "Split Card",
    icon: "",
    component: SplitCard,
    layout: "",
    menu: true,
    permission: "",
  },
  {
    path: "/payment-request-button",
    name: "Payment Request Button",
    icon: "",
    component: PaymentRequestButton,
    layout: "",
    menu: true,
    permission: "",
  },
];

export default dashRoutes;
