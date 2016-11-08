import React, { Component } from 'react';
import Immutable from 'immutable'
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
    };
  }

  animateStar = () => {
    const { noteId, onToggleFavClick } = this.props;
    this.state.bounceValue.setValue(1.7)
    onToggleFavClick(noteId)

    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 5,
      }
    ).start();
  }

  render() {
    const { note } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.animateStar}>
        <Animated.View
          style={[
            styles.starContainer,
            { transform: [ {scale: this.state.bounceValue} ] }
          ]}>
          <FontAwesome
            name={'star'}
            size={30}
            color={ note.favorite ? Colors.starActive :
              Colors.starDefault } />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

Star.propTypes = {
  note: React.PropTypes.object.isRequired,
  onToggleFavClick: React.PropTypes.func.isRequired,
  noteId: React.PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  starContainer: {
    width: 30,
    height: 30,
  },
})
