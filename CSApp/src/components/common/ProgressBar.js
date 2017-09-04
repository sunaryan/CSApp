import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

class ProgressBar extends Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress, //put original value here change
        duration: this.props.duration
      }).start();
    }
  }

  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
      row
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [
        0, 1
      ],
      outputRange: [
        '0%', '100%'
      ],
      extrapolate: 'clamp'
    });

    return (
      <View
        style={[{ flexDirection: 'row', height }, row ? { flex: 1 } : undefined]}
      >
        <View
          style={{ flex: 1, borderColor, borderWidth, borderRadius }}
        >
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
          />
          <Animated.View
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: barColor,
              width: widthInterpolated
            }}
          />
          <Text style={styles.progressBarText}>{parseInt(this.props.progress * 100, 10)}</Text>
        </View>
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  height: 20,
  borderColor: 'lightgray',
  borderWidth: 1,
  borderRadius: 4,
  barColor: '#FFC85E',
  fillColor: 'lightgray',
  duration: 100
};

const styles = {
  progressBarText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
};
export { ProgressBar };
