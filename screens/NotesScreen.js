import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper'

import ProgressBar from '../components/ProgressBar'

const NOTES = ["Compared to the mental abilities of other species on this planet, our sixth sense is what truly makes our brains superpowered. The problem is that the confidence we have in this sense far outstrips our actual ability, and the confidence we have in our judgment rarely gives us a good sense of how accurate we actually are. The main goal of this book is to reduce your illusion of insight into the minds of others, both by trying to improve your understanding and by inducing a greater sense of humility about what you know - and what you do not know - about others.",
  "More time together did not make the couples any more accurate; it just gave them the illusion that they were more accurate.",
  "Descartes was so certain about his introspective ability that he staked his own, as well as God’s, existence on it with his famous “I think, therefore I am”",
  "People who imagined seeing an instance of blatant sexism thought they would be outraged. When people actually saw this very same act, however, they felt virtually no rage at all. Do people not know their own minds?",
  "Naïve realism: the intuitive sense that we see the world out there as it actually is, rather than as it appears from our own perspective."]

const screenWidth = Dimensions.get('window').width;

export default class NotesScreen extends Component {
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
              <ScrollView style={styles.noteScrollView} key={index}>
                <Text style={styles.noteScrollText}>{ note }</Text>
              </ScrollView>
            );
          })}
        </Swiper>
        <ProgressBar page={this.state.scrollIndex + 1} notes={NOTES} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notesContainer: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
  },
  noteScrollView: {
    flex: 1,
  },
  noteScrollText: {
    flexWrap: 'wrap',
    width: screenWidth - 60,
  },
});
