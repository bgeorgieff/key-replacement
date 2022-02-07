import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollTopTop";
import {
  Home,
  AuthPage,
  ServicePage,
  BookingSteps,
  About,
  LogOut,
  Profile,
} from "./pages";

const Navigation = () => {
  const isLogged = useSelector((store) => store.authReducer.authData);

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/key-replacement" component={Home} />
        <Route
          exact
          path="/login"
          render={() => (!!isLogged ? <Redirect to="/" /> : <AuthPage />)}
        />
        <Route
          exact
          path="/key-replacement/service-page"
          component={ServicePage}
        />
        <Route
          exact
          path="/service-page/:id/step-:id"
          component={BookingSteps}
        />
        <Route exact path="/key-replacement/about-us" component={About} />
        <Route exact path="/key-replacement/logout" render={() => <LogOut />} />
        <Route exact path="/key-replacement/profile" component={Profile} />
      </Switch>
    </ScrollToTop>
  );
};

export default Navigation;
