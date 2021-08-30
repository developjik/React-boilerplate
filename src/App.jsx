import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigator from './Components/Header/Navigator';
import Home from './routes/Home/Home';
import Contact from './routes/Contact/Contact';
import SignIn from './routes/Login/SignIn';
import SignUp from './routes/Login/SignUp';
import NotFound from './routes/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Navigator isLogin={isLogin} setIsLogin={setIsLogin} />
      <Switch>
        <Route path="/" component={() => <Home />} exact />
        <Route
          path="/contact"
          component={() => <Contact setIsLogin={setIsLogin} />}
          exact
        />
        <Route
          path="/signIn"
          component={() => <SignIn setIsLogin={setIsLogin} />}
          exact
        />
        <Route path="/signUp" component={() => <SignUp />} exact />
        <Route component={() => <NotFound />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
