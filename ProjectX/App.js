/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { setCustomText } from 'react-native-global-props';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/reducers/mainReducer';
import Navigator from './screens/navigator';

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

const customTextProps = {
  style: {
    fontFamily: 'monospace'
  }
};

setCustomText(customTextProps);

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
