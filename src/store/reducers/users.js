import { ACTION_TYPES } from "../actions/users";

const initialState = {
  users: [],
  fetchFailure: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USERS:
      return {
        ...state,
        fetchFailure: false,
        users: action.payload,
      };
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        ...state,
        fetchFailure: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
