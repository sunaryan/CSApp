import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewStyle} />
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
        {/* auth bucket */}
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        {/* main bucket */}
        <Scene key="main">
          <Scene
            key="home"
            component={Home}
            hideNavBar
            initial
          />
        </Scene>

      </Router>
    </View>

  );
};

const styles = {
  viewStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#F5FCFF'
  },
  navBar: {
    backgroundColor: '#004b69',
  },
  navBarTitle: {
    color: '#FFFFFF'
  },
};
export default RouterComponent;
