import chai, { expect } from 'chai'
import chaiImmutable from 'chai-immutable'
import Immutable, { List, fromJS } from 'immutable'
chai.use(chaiImmutable);

import notesReducer from '../reducers/notes'

describe('Adding a fav', () => {
  it('should change the corresponding fav flag', () => {
    let initialState = fromJS([
      {
        id: 10,
        text: 'My first note!',
        favorite: false
      },
      {
        id: 20,
        text: 'My second note!',
        favorite: false
      }
    ]);
    let finalState = fromJS([
      {
        id: 10,
        text: 'My first note!',
        favorite: false
      },
      {
        id: 20,
        text: 'My second note!',
        favorite: true
      }
    ]);
    let action = {
      type: 'TOGGLE_FAV',
      id: 20
    }
    expect(notesReducer(initialState, action)).to.equal(finalState);
  });
});
