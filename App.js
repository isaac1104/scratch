import React, { Component } from 'react';
import Main from './src/client/components/Main';
import rootReducer from './src/client/reducers';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(reduxThunk)
);

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
