import { FETCH_USER_LIST_SUCCEEDED, FETCH_USER_LIST_FAILED } from './UserListPage.actions';

const userListReducers = (state = {
  loaded: false,
  data: [],
  error: null,
}, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loaded: true,
      };
    case FETCH_USER_LIST_FAILED:
      return {
        ...state,
        loaded: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default {
  userList: userListReducers,
};
