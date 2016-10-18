import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotesScreen from '../screens/NotesScreen';

const mapStateToProps = (state) => {
  const { notes } = state;
  return {
    notes
  }
};

export default connect(mapStateToProps)(NotesScreen);
