import { fromJS } from 'immutable'

const NOTES = [
  {
    id: 1,
    text: "Compared to the mental abilities of other species on this planet, our sixth sense is what truly makes our brains superpowered. The problem is that the confidence we have in this sense far outstrips our actual ability, and the confidence we have in our judgment rarely gives us a good sense of how accurate we actually are. The main goal of this book is to reduce your illusion of insight into the minds of others, both by trying to improve your understanding and by inducing a greater sense of humility about what you know - and what you do not know - about others.",
    favorite: false
  },
  {
    id: 2,
    text: "More time together did not make the couples any more accurate; it just gave them the illusion that they were more accurate.",
    favorite: false
  },
  {
    id: 3,
    text: "Descartes was so certain about his introspective ability that he staked his own, as well as God’s, existence on it with his famous “I think, therefore I am”",
    favorite: false
  },
  {
    id: 4,
    text: "People who imagined seeing an instance of blatant sexism thought they would be outraged. When people actually saw this very same act, however, they felt virtually no rage at all. Do people not know their own minds?",
    favorite: false
  },
  {
    id: 5,
    text: "Naïve realism: the intuitive sense that we see the world out there as it actually is, rather than as it appears from our own perspective.",
    favorite: false
  },
  {
    id: 6,
    text: "““A man is rich,” he wrote in Walden, “in proportion to the number of things which he can afford to let alone.””",
    favorite: false
  }
]

export default notesReducer = (state = fromJS(NOTES), action) => {
  switch (action.type) {
    case 'TOGGLE_FAV':
      const index = state.findIndex(note => { note.get('id') === action.id });
      return state.setIn([index, 'favorite'], !state.getIn([index, 'favorite']));
    default:
      return state;
  }
}
