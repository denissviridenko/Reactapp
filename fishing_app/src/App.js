import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { routes } from './constants/routes';
import { MainPage } from './containers/mainPage/main';

const App = () => {
 
  return (
    <div className='app'>
          <Router>
            <Switch>
              <Route
                path={routes.main.path}
                exact={true}
                component={() => (
                  <MainPage />
                )}
              />
              <Route
                path={routes.about.path}
                exact={true}
                component={() => (
                  <MainPage />
                )}
              />
            </Switch>
          </Router>
    </div>
  );
};

export default App;