import React from 'react';
import { Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const ProgressGraph = (props) => {
  return (
    <ProgressCircle
      percent={props.percentage}
      radius={25}
      borderWidth={5}
      color="#9b0d0b"
      shadowColor="#3c763d"
      bgColor="#fff"
    >
      <Text style={{ fontSize: 14 }}>{props.percentage}</Text>
    </ProgressCircle>
  );
};

export { ProgressGraph };
