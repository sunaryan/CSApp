import React, { Component } from 'react';
import { View, Text, Icon, Button } from 'react-native';
import moment from 'moment';
import { Card, CardSection, ProgressBar } from './../../../components/common';

class AccountDetail extends Component {

  state = {
    progress: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        progress: state.progress * 0.1, //change
      }));
    }, 1000);
  }

  renewalButton(renewal) {
    if (renewal.length > 0) {
      return (
        <Button transparent>
          <Icon
            active
            name="time" style={{
              fontSize: 26
            }}
          />
          <Text>{renewal}</Text>
        </Button>
      );
    }
    return <Button transparent style={styles.hidden} />;
  }

  renewalRender(renewal) {
    if (renewal.length > 1) {
      moment.locale('en');
      const newDate = moment(renewal).format('DD-MM-YYYY');
      return <Text style={{ marginTop: 5 }}>{newDate}</Text>;
    }
      return null;
  }

  render() {
    const {
      name,
      status,
      plan,
      pending_actions_task,
      health,
      mrr,
      renewal,
    } = this.props.record;
    const {
      title,
      segment,
      statusStyle,
      task
    } = styles;

    const progressValue = (parseInt(health, 10)) / 100;
    return (
      <Card>
        <CardSection>
          <View style={styles.viewStyle}>
            <View>
              <Text style={title}>{name}</Text>
              <Text style={segment}>{plan}</Text>
            </View>
            <View>
              <Text style={statusStyle}>{status}</Text>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
            <Text style={task}>{pending_actions_task}</Text>
          </View>
          <View style={styles.progress}>
              <ProgressBar
                progress={progressValue} //change
                duration={5000}
              />
            </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.mrr}>MRR: ${mrr}</Text>
            {this.renewalRender(renewal)}
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    viewStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    progress: {
      alignSelf: 'flex-end',
      marginBottom: 20,
      marginRight: 10,
      width: 70
    },
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    },
    segment: {
    fontSize: 16,
    marginLeft: 10,
  },
  statusStyle: {
    fontSize: 14,
    alignSelf: 'flex-end',
    color: 'green',
    marginTop: 10,
    marginRight: 10
  },
  task: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },
  mrr: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
  },

};
export default AccountDetail;
