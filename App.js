import React, { Component } from 'react';
import Main from './src/client/components/Main';
import rootReducer from './src/client/reducers';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(reduxThunk)
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#36393f',
    accent: '#4ecdc4'
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>
    </Provider>
  );
}

export default App;
