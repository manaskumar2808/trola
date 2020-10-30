// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Colors from './constants/Colors';

import Navigator from './navigator/Navigator';
import authReducer from './store/reducers/authReducer';
import userReducer from './store/reducers/userReducer';
import feedReducer from './store/reducers/feedReducer';
import commentReducer from './store/reducers/commentReducer';

const fetchFonts = () => {
  return Font.loadAsync({
    'billabong': require('./assets/fonts/Billabong.ttf')
  });
}

const rootReducer = combineReducers({
  ath: authReducer,
  usr: userReducer,
  pst: feedReducer,
  cmt: commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }


  return (
    <Provider store={store}>
        <Navigator />
        <StatusBar translucent={true} backgroundColor={Colors.background} style={styles.statusBar} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  statusBar: {
    color: Colors.milk,
  }
});
