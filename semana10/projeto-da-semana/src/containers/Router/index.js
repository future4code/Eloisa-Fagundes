import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage/HomePage';
import CreateTrip from '../CreateTrip/CreateTripPage';
import TripDetails from '../TripDetails/TripDetailsPage';
import ApplyToTrip from '../ApplyToTrip/ApplyToTrip';
import ListTrip from '../ListTrips/ListTripsPage';

export const routes = {
  // public
  root: "/",
  login: "/login",
  applyToTrip: "/application-form",
  // private
  tripCreate: "/trips/create",
  tripDetails: "/trips/details",
  tripsList: "/trips/list"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.applyToTrip} component={ApplyToTrip} />
        <Route exact path={routes.tripCreate} component={CreateTrip} />
        <Route exact path={routes.tripDetails} component={TripDetails} />
        <Route exact path={routes.tripsList} component={ListTrip} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
