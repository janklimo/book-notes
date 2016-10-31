import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Colors from '../constants/Colors';

export default class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1),
      active: false
    };
  }

  animateStar = () => {
    this.state.bounceValue.setValue(1.7)
    this.setState({ active: !this.state.active })
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 5,
      }
    ).start();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.animateStar}>
        <Animated.View
          style={[
            styles.starContainer,
            { transform: [ {scale: this.state.bounceValue} ] }
          ]}>
          <FontAwesome
            name={'star'}
            size={22}
            color={ this.state.active ? Colors.starActive : Colors.starDefault } />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  starContainer: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
})
