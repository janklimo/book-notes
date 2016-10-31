import * as types from './actionTypes';

export function toggleFav(noteId) {
  return({ type: types.TOGGLE_FAV, noteId });
}
