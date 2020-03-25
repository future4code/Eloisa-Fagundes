import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Home from '../Home/HomeFormPage'
import CreateTrip from '../CreateTrip/CreateTripPage'
import TripDetails from '../TripDetails/TripDetailsPage'




const routes = {
  root: "/",
  // {LoginPage}
  applicationForm: "/application-form",
  tripCreate: "trips-create",
  tripDetails: "trip-details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.applicationForm} component={Home} />
        <Route exact path={routes.tripCreate} component={CreateTrip} />
        <Route exact path={routes.tripDetails} component={TripDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
