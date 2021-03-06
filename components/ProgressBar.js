import React, { Component } from 'react';
import Immutable from 'immutable'
import { StyleSheet, Animated, Easing } from 'react-native';
import Layout from '../constants/Layout'

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.step = Layout.window.width / props.notes.size;
    this.state = {
      widthAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.animateWidth(1);
  }

  componentWillReceiveProps({page}) {
    this.animateWidth(page);
  }

  animateWidth(page) {
    Animated.timing(
      this.state.widthAnim,
      {
        toValue: this.step * page,
        easing: Easing.linear,
        duration: 250,
      }
    ).start();
  }

  render() {
    let currentStyle = { width: this.state.widthAnim };
    return (
      <Animated.View style={[styles.progressBar, currentStyle]}>
      </Animated.View>
    );
  }
}

ProgressBar.propTypes = {
  page: React.PropTypes.number.isRequired,
  notes: React.PropTypes.instanceOf(Immutable.Map).isRequired,
}

const styles = StyleSheet.create({
  progressBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 4,
    backgroundColor: '#66abdd',
  },
});
