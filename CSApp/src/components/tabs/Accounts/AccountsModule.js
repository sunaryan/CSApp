import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Spinner, Header } from './../../../components/common';
import services from './../../../utilities/services';
import AccountList from './AccountList';
import AccountDetail from './AccountDetail';
import utilities from './../../../utilities/utilities';
import {
  USER_DATA,
  ACCOUNTS_INFO_DATA,
  ACCOUNTS_KPI_DATA,
  ACCOUNTS_USERS_KPI_DATA
} from './../../../utilities/types';

class AccountsModule extends Component {
  static navigationOptions = {
    tabBarLabel: 'Accounts'
  }

  constructor() {
    super();
    this.state = {
      accountsKPIData: '',
      accountsInfoData: '',
      // accountsUserKPIData: '',
    };
  }

  componentWillMount() {
    this.getData(ACCOUNTS_KPI_DATA)
    .then((response) => {
       console.log('value of ACCOUNTS_KPI_DATA: ', response);
      this.setState({ accountsKPIData: response.data.data });
    })
    .catch((err) => {
      console.log('value of err: ', err);
    });

    // this.getData(ACCOUNTS_INFO_DATA)
    // .then((response) => {
    //   this.setState({ accountsInfoData: response.data.data });
    // })
    // .catch((err) => {
    //   console.log('value of err: ', err);
    // });

    // this.getData(ACCOUNTS_USERS_KPI_DATA)
    // .then((response) => {
    //   console.log('value of datas: ', response.data.data);
    //   this.setState({ accountsUserKPIData: response.data.data });
    // })
    // .catch((err) => {
    //   console.log('value of err: ', err);
    // });
  }

  getData(value) {
    this.getToken()
    .then((token) => {
      console.log('value of token: ', token);
      const promise = new Promise((resolve, reject) => {
        if (value === ACCOUNTS_KPI_DATA) {
          const data = services.getAccountsKPIData(token);
          resolve(data);
        }
        // else if (value === ACCOUNTS_INFO_DATA) {
        //   const data = services.getAccountsInfoData(token);
        //   resolve(data);
        // } else if (value === ACCOUNTS_USERS_KPI_DATA) {
        //   const data = services.getAccountsKPIData(token);
        //   resolve(data);
        // }
        reject('this is error');
      });
      return promise;
    }).catch((err) => {
      console.log('value of err: ', err);
    });
  }

  getToken() {
    const promise = new Promise((resolve, reject) => {
      const token = utilities.getAsyncStorageData(USER_DATA);
      resolve(token);
      reject();
    });
    return promise;
  }

  renderAccountsKPI() {
    // console.log('value of length: ', this.state.accountsKPIData.length);
    if (this.state.accountsKPIData !== undefined && this.state.accountsKPIData.length !== 0) {
      console.log('value of Passing: ', this.state.accountsKPIData);
      return <AccountList account={this.state.accountsKPIData} />;
    }
  }

  renderAccountsInfo() {
    if (this.state.accountsInfoData !== undefined && this.state.accountsInfoData.length !== 0) {
      console.log('value of data:', this.state.accountsInfoData);
      return this.state.accountsInfoData.map(account =>
          <AccountDetail key={account.name} record={account} />
      );
    }
    return <Spinner />;
  }

  render() {
    console.log('This happens Fourth');
    return (
      <View>
        <Header headerText="Accounts" />
        <ScrollView style={{ marginBottom: 65 }} showsVerticalScrollIndicator={false}>
          {/* {this.renderAccountsKPI()} */}
          {/* {this.renderAccountsInfo()} */}
        </ScrollView>
      </View>
    );
  }
}

export default AccountsModule;
