import chai, { expect } from 'chai'
import chaiImmutable from 'chai-immutable'
import Immutable, { List, fromJS } from 'immutable'
chai.use(chaiImmutable);

import notesReducer from '../store/notes/reducer'
import * as actions from '../store/notes/actions'

describe('toggleFav', () => {
  it('should change the corresponding fav flag', () => {
    let initialState = fromJS({
      10: {
        text: 'My first note!',
        favorite: false
      },
      20: {
        text: 'My second note!',
        favorite: false
      }
    });
    let finalState = fromJS({
      10: {
        text: 'My first note!',
        favorite: false
      },
      20: {
        text: 'My second note!',
        favorite: true
      }
    });
    expect(notesReducer(initialState, actions.toggleFav('20'))).to.equal(finalState);
    expect(notesReducer(finalState, actions.toggleFav('20'))).to.equal(initialState);
  });
});
