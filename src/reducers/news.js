/* eslint-disable no-param-reassign */
import { SET_VOTE, SET_HIDE } from '../actions/news';

const initialState = {
  newsDetails: {},
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOTE:
      return {
        ...state,
        newsDetails: {
          ...state.newsDetails,
          [action.payload]: {
            ...state.newsDetails[action.payload],
            vote:
              state.newsDetails[action.payload] && state.newsDetails[action.payload].vote
                ? state.newsDetails[action.payload].vote + 1
                : 1,
          },
        },
      };
    case SET_HIDE:
      return {
        ...state,
        newsDetails: {
          ...state.newsDetails,
          [action.payload]: {
            ...state.newsDetails[action.payload],
            hide: true,
          },
        },
      };
    default:
      return { ...state };
  }
};

export default counterReducer;
