import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

// console.log(action); insert console.log in export to see all actions
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, };
    case LOGIN_FAIL:
      return { ...state, password: '', loading: false, error: 'Authentication Failed' };
    default:
      return state;
  }
};
