import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loader from './components/loader/Loader';
import { light, dark } from './theme';
import GlobalStyles from './globalStyles';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));

const App = () => {

  const theme = useSelector(state => state.themeReducer.theme);

  return (
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyles />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Suspense>
        </Switch>
      </ThemeProvider>
  );
}

export default App;
