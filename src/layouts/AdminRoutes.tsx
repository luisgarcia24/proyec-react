import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom'

interface IRoute {
  path: string
  name: string
  icon: string
  component: () => JSX.Element
  layout: string
  menu: boolean
  permission: string
}

interface IProps {
  routes: IRoute[]
}

const AdminRoutes: FC<IProps> = ({routes}) => {
  return (
    <React.Fragment>
      <Switch>
        {routes.map((route, key) => {
          return (
            <Route
              key={key}
              path={route.path}
              component={route.component}
              exact={true}
              strict={true}
              sensitive
            />
          )
        })}
      </Switch>
    </React.Fragment>
  )
}

export default AdminRoutes;
