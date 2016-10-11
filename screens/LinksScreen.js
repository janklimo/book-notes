import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import Swiper from 'react-native-swiper'

const NOTES = ['These', 'are', 'my', 'notes', 'there', 'are', 'many']

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: NOTES,
      scrollIndex: 0
    };
  }

  onMomentumScrollEnd(e, state, context) {
    // state here refers to the Swiper state
    this.setState({scrollIndex: state.index})
  }

  render() {
    return (
      <View style={styles.notesContainer}>
        <Swiper showsPagination={false} loop={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
          {this.state.notes.map((note, index) => {
            return(
              <Text key={index}>
                { note }
              </Text>
            );
          })}
        </Swiper>
        <ProgressBar page={this.state.scrollIndex + 1} />
      </View>
    );
  }
}

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.step = Dimensions.get('window').width / NOTES.length;
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
        duration: 500,
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


const styles = StyleSheet.create({
  notesContainer: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 30,
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 4,
    backgroundColor: '#66abdd',
  },
});
