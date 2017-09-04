import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ProgressGraph } from './../../../components/common';

const cards = [
  {
    key: 1,
    name: 'Accounts',
    amount: '0',
    desc: 'data for number 1'
  }, {
    key: 2,
    name: 'Portfolio',
    amount: '0',
    desc: 'data for number 2'
  }, {
    key: 3,
    name: 'MRR',
    amount: '0',
    desc: 'data for number 3'
  }, {
    key: 4,
    name: 'Health Score',
    amount: '0',
    desc: 'data for number 4'
  }, {
    key: 5,
    name: 'Onboarding',
    amount: '0',
    desc: 'data for number 5'
  }, {
    key: 6,
    name: 'New MRR',
    amount: '0',
    desc: 'data for number 6'
  }, {
    key: 7,
    name: 'Upsell',
    amount: '0',
    desc: 'data for number 11'
  }, {
    key: 8,
    name: 'Downsell',
    amount: '0',
    desc: 'data for number 12'
  }, {
    key: 9,
    name: 'Loss',
    amount: '0',
    desc: 'data for number 9'
  },
];

class AccountList extends Component {

  renderItem(item, data) {
    console.log('value of data:', data);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        {this.renderText(item.name, data)}
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  }

  renderText(name, data) {
    const {
      total,
      portfolio_value,
      mrr,
      average_health_score,
      onboarding,
      new_mrr,
      total_upsell,
      total_downsell,
      loss_in_mrr,
    } = data;

    if (name === 'Accounts') {
      return <Text style={styles.subTitle}>{total}</Text>;
    } else if (name === 'Portfolio') {
      return <Text style={styles.subTitle}>{portfolio_value}</Text>;
    } else if (name === 'MRR') {
      return <Text style={styles.subTitle}>{mrr}</Text>;
    } else if (name === 'Health Score') {
      return <ProgressGraph percentage={average_health_score} />;
    } else if (name === 'Onboarding') {
      return <Text style={styles.subTitle}>{onboarding}</Text>;
    } else if (name === 'New MRR') {
      return <Text style={styles.subTitle}>{new_mrr}</Text>;
    } else if (name === 'Upsell') {
      return <Text style={styles.subTitle}>{total_upsell}</Text>;
    } else if (name === 'Downsell') {
      return <Text style={styles.subTitle}>{total_downsell}</Text>;
    } else if (name === 'Loss') {
      return <Text style={styles.subTitle}>{loss_in_mrr}</Text>;
    }
    return <Text style={styles.subTitle}>0</Text>;
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => this.renderItem(item, this.props.account)} data={cards}
        />
        <View
          style={{
          height: 2,
          backgroundColor: 'lightgray',
          marginBottom: 5,
          marginTop: 5,
        }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 5,
    width: 180,
    height: 150,
    borderColor: 'lightgray',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 4
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  subTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Roboto'
  },
  desc: {
    fontSize: 14,
    marginTop: 15,
    fontFamily: 'Roboto'
  },
};

export default AccountList;
