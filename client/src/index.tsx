import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './containers/Main';
import About from './containers/About';
import registerServiceWorker from './registerServiceWorker';
import { testReducer } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(testReducer, {
  testState: 'hello'
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
