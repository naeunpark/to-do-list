import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './redux/configureStore';
import AppContainer from './components/AppContainer/presenter';

const { persistor, store } = configureStore();

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const { isLoadingComplete } = this.state;

    if(!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <StatusBar barStyle={"light-content"} />
          <AppContainer style={styles.customFont}/>
        </PersistGate>
      </Provider>
    );
  };

  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo_trans.png")
      ]),
      // Font.loadAsync([
      //   require("./assets/fonts/Sunflower-Bold.ttf"),
      //   require("./assets/fonts/Sunflower-Light.ttf"),
      //   require("./assets/fonts/Sunflower-Medium.ttf")
      // ])
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}
const styles = StyleSheet.create({
  customFont: {
  fontFamily: 'Sunflower-Bold',
  }
 });

export default App;
