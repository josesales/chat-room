import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/loader/Loader';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));

const App = () => {

  return (
    <div>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
