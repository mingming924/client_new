import { FETCH_USER, ERROR_RESPONSE } from './../ducks/types';

const INITIAL_STATE = { profile: {}, message: '', error: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, profile: action.payload.user };
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
    default:
      // do nothing
  }

  return state;
}
