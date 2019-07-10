import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainFooter from './components/MainFooter'

const Welcome = lazy(() => import('./views/Welcome'))
const Auth = lazy(() => import('./views/Auth'))
const Main = lazy(() => import('./views/Main'))

const Routing = () => {
  return (
    <main className="app">
      <Router>
        <Suspense fallback={<div className="loader" />}>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/auth" component={Auth} />
            <Route path="/app" component={Main} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
      <MainFooter />
    </main>
  )
}

export default Routing
