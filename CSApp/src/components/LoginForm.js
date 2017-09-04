import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, createUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    //Action Creator
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    //Action Creator
    this.props.passwordChanged(text);
  }

  onLoginButtonPress() {
    const { email, pwd } = this.props;
    this.props.loginUser({ email, pwd });
  }

  // onSignUpButtonPress() {
  //   this.props.createUser();
  // }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button whenPressed={() => this.onLoginButtonPress()}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='email@gmail.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              keyboardType='email-address'
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.pwd}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
        {/* <CardSection>
          <Button whenPressed={() => this.onSignUpButtonPress()}>
            Sign up
          </Button>
        </CardSection> */}
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  cardStyle: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: -20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSection: {
    marginLeft: 10,
    marginRight: 10,
  },
  customCardSection: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, pwd, error, loading } = auth;
  return { email, pwd, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, createUser
})(LoginForm);
