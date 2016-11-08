import React, { Component } from 'react';
import _ from 'lodash';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper'
import Layout from '../constants/Layout'

import ProgressBar from '../components/ProgressBar'
import Star from '../components/Star'

export default class NotesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollIndex: 0
    };
  }

  onMomentumScrollEnd(e, state, context) {
    // state here refers to the Swiper state
    this.setState({scrollIndex: state.index})
  }

  render() {
    const { notes, onToggleFavClick } = this.props;
    return (
      <View style={styles.notesContainer}>
        <Swiper showsPagination={false} loop={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
          {_.map(notes, (note, noteId) => {
            return(
              <ScrollView style={styles.noteScrollView} key={noteId}>
                <Text style={styles.noteScrollText}>{ note.text }</Text>
                <View style={styles.starContainer}>
                  <Star note={note} noteId={noteId}
                    onToggleFavClick={onToggleFavClick}/>
                </View>
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
  starContainer: {
    flex: 1,
    width: Layout.window.width - 60,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
