import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './HomePage/Home'
import AddMyCrypto from './Crypto/AddMyCrypto';

export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addmycrypto" exact component={AddMyCrypto} />
      </Switch>
    </Router>
  );

}

export default Routes;
