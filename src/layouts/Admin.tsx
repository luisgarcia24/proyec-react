import AdminRoutes from "./AdminRoutes";
import routes from "../routes";

export const Admin = (props: any) => {
  return (
    <div className="wrapper">
      <div className="main-panel">
        <AdminRoutes routes={routes} />
      </div>
    </div>
  )
}

export default Admin;
