import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

const configureStore = initialState => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore
