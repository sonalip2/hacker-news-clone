export const SET_VOTE = 'SET_VOTE';
export const SET_HIDE = 'SET_HIDE';

export const setVote = (id) => ({
  type: SET_VOTE,
  payload: id,
});

export const setHide = (id) => ({
  type: SET_HIDE,
  payload: id,
});
