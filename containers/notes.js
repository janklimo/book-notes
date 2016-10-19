import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotesScreen from '../screens/NotesScreen';

const mapStateToProps = (state) => {
  return {
    notes: state.get('notes')
  }
};

export default connect(mapStateToProps)(NotesScreen);
