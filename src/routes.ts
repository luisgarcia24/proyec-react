import App from "./App";

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
];

export default dashRoutes;
