import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner, Header } from './../../../components/common';
import AccountDetail from './../Accounts/AccountDetail';

export default class PortfolioModule extends Component {
  static navigationOptions = {
    tabBarLabel: 'Portfolio',
  }
  state = {
    data: [],
  }
  renderAlbums() {
    if (this.state.data && this.state.data.length > 0) {
      return this.state.data.map(account =>
        <AccountDetail key={account.name} record={account} />
      );
    }
    return <Spinner />;
  }

  render() {
    return (
      <View>
        <Header headerText="Portfolio" />
      </View>
    );
  }
}
