import React from 'react';
import LoginForm from '../FormComponents/LoginForm';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import InputIncomeFeild from '../TaxFormUI/FormInputFeilds';
import TaxCalcForm from '../TaxFormUI/taxCalcForm';
import { UserInfoProvider } from '../context/globalState';
import DashBoard from '../UserScreen/dashboard';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/tax-calculation-form" component={TaxCalcForm} />
      </Switch>
    </Router>
  );
};
