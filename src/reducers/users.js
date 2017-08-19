import { Types } from '../actions/users';

const initialState = {
  items: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
};
