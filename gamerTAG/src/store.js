import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';

import rootReducer from './reducers/index';

import users from './data/users';
import games from './data/games';

const defaultState = {
  users: users,
  games: games
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

const history = syncHistoryWithStore(browserHistory, store);

module.exports = {
  store,
  history
};
