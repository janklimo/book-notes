const NOTES = ["Compared to the mental abilities of other species on this planet, our sixth sense is what truly makes our brains superpowered. The problem is that the confidence we have in this sense far outstrips our actual ability, and the confidence we have in our judgment rarely gives us a good sense of how accurate we actually are. The main goal of this book is to reduce your illusion of insight into the minds of others, both by trying to improve your understanding and by inducing a greater sense of humility about what you know - and what you do not know - about others.",
  "More time together did not make the couples any more accurate; it just gave them the illusion that they were more accurate.",
  "Descartes was so certain about his introspective ability that he staked his own, as well as God’s, existence on it with his famous “I think, therefore I am”",
  "People who imagined seeing an instance of blatant sexism thought they would be outraged. When people actually saw this very same act, however, they felt virtually no rage at all. Do people not know their own minds?",
  "Naïve realism: the intuitive sense that we see the world out there as it actually is, rather than as it appears from our own perspective.",
"““A man is rich,” he wrote in Walden, “in proportion to the number of things which he can afford to let alone.””"]

export default notesReducer = (state = NOTES, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return 'Joel';
    default:
      return state;
  }
}
