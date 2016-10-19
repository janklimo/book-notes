import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper'
import Layout from '../constants/Layout'

import ProgressBar from '../components/ProgressBar'

export default class NotesScreen extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      scrollIndex: 0
    };
  }

  onMomentumScrollEnd(e, state, context) {
    // state here refers to the Swiper state
    this.setState({scrollIndex: state.index})
  }

  render() {
    const { notes } = this.props;
    return (
      <View style={styles.notesContainer}>
        <Swiper showsPagination={false} loop={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
          {notes.toArray().map(note => {
            return(
              <ScrollView style={styles.noteScrollView} key={note.get('id')}>
                <Text style={styles.noteScrollText}>{ note.get('text') }</Text>
              </ScrollView>
            );
          })}
        </Swiper>
        <ProgressBar page={this.state.scrollIndex + 1} notes={notes} />
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
    width: Layout.window.width - 60,
  },
});
