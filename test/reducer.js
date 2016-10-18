import chai, { expect } from 'chai'
import chaiImmutable from 'chai-immutable'
import Immutable, { List, fromJS } from 'immutable'

chai.use(chaiImmutable);

let initialState = {
  books: [
    {
      id: 0,
      rating: 8,
      notes: [
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
      ]
    }
  ]
};

describe('List', () => {
  console.log('nice');
  console.log(fromJS(initialState));
  it('should respond to include', () => {
    expect(new List([1, 2, 3])).to.include(2);
  });
});
