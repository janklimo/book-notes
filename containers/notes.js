import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotesScreen from '../screens/NotesScreen';
import { toggleFav } from '../store/notes/actions'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleFavClick: (id) => {
      dispatch(toggleFav(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen);
