import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

const cards = [
  {
    key: 1,
    name: 'Portfolio',
    amount: '$6.4M',
    desc: 'data for number 1'
  }, {
    key: 2,
    name: 'Accounts',
    amount: '11',
    desc: 'data for number 2'
  }, {
    key: 3,
    name: 'MRR',
    amount: '$465.5K',
    desc: 'data for number 3'
  }, {
    key: 4,
    name: 'Health Score',
    amount: '72',
    desc: 'data for number 4'
  }, {
    key: 5,
    name: 'Onboarding',
    amount: '2',
    desc: 'data for number 5'
  }, {
    key: 6,
    name: 'License Utilization',
    amount: '35.4%',
    desc: 'data for number 6'
  }, {
    key: 7,
    name: 'Reach',
    amount: '100.0%',
    desc: 'data for number 7'
  }, {
    key: 8,
    name: 'Daily Active Users',
    amount: '1056',
    desc: 'data for number 8'
  }, {
    key: 9,
    name: 'Loss',
    amount: '$0',
    desc: 'data for number 9'
  }, {
    key: 10,
    name: 'New MRR',
    amount: '$0',
    desc: 'data for number 10'
  }, {
    key: 11,
    name: 'Upsell',
    amount: '$0',
    desc: 'data for number 11'
  }, {
    key: 12,
    name: 'Downsell',
    amount: '$10.0K',
    desc: 'data for number 12'
  }
];

class List extends Component {
  renderItem(item) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.amount}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => this.renderItem(item)} data={cards}
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
  }
};

export default List;
