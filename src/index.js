import React from 'react';
import {enableScreens} from 'react-native-screens';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig.js';
import Routes from './routes';

enableScreens(false);

function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="#7159c1"
      />
      <Routes />
    </>
  );
}

export default App;
