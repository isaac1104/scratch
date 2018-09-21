import React, { Component } from 'react';
import Main from './src/client/components/Main';
import rootReducer from './src/client/reducers';
import reduxThunk from 'redux-thunk';
import { AsyncStorage, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['deviceInfo', 'user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(reduxThunk)
);

const persistor = persistStore(store);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#36393f',
    accent: '#4ecdc4'
  }
};

const renderLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <PaperProvider theme={theme}>
          <Main />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
