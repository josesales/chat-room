import React, { lazy, Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loader from './components/loader/Loader';
import { light, dark } from './theme';
import GlobalStyles from './globalStyles';
import { useDispatch, useSelector } from 'react-redux';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));

const App = () => {

  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer.theme);

  //TODO Transfer the hook and function to login page and check if a reducer for the theme should be created
  // const [theme, setTheme] = useState('light');

  // // The function that toggles between themes
  // const toggleTheme = () => {
  //   // if the theme is not light, then set it to dark
  //   if (theme === 'light') {
  //     setTheme('dark');
  //     // otherwise, it should be light
  //   } else {
  //     setTheme('light');
  //   }
  // }

  return (
    <div>
      <ThemeProvider theme={theme == 'light' ? light : dark}>
        <GlobalStyles />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Suspense>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
