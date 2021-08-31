import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigator from './Components/Header/Navigator';
import Home from './routes/Home/Home';
import Contact from './routes/Contact/Contact';
import SignIn from './routes/Login/SignIn';
import SignUp from './routes/Login/SignUp';
import Info from './routes/UserInfo/Info';
import NotFound from './routes/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

import AuthRoute from './routes/AuthRoute';
import NoAuthRoute from './routes/NoAuthRoute';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Switch>
        <Route path="/" component={(props) => <Home props={props} />} exact />
        <AuthRoute
          path="/contact"
          component={(props) => <Contact props={props} />}
        />
        <NoAuthRoute
          path="/signIn"
          component={(props) => <SignIn props={props} />}
        />
        <NoAuthRoute
          path="/signUp"
          component={(props) => <SignUp props={props} />}
        />
        <AuthRoute path="/info" component={(props) => <Info props={props} />} />
        <Route component={(props) => <NotFound props={props} />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
