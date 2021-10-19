import AdminRoutes from "./AdminRoutes";
import routes from "../routes";

export const Admin = () => {
  return ( <AdminRoutes routes={routes} /> )
}

export default Admin;
