import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainFooter from './components/MainFooter'

const Auth = lazy(() => import('./views/Auth'))
const AuthSuccess = lazy(() => import('./views/AuthSuccess'))

const Routing = ({ appStore }) => {
  return (
    <main className="app">
      <Router>
        <Suspense fallback={<div className="loader" />}>
          <Route path="/" exact render={(props) => <Auth {...props} appStore={appStore} />} />
          <Route path="/auth/:code?" component={AuthSuccess} />
        </Suspense>
      </Router>
      <MainFooter />
    </main>
  )
}

export default Routing
