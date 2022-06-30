import { GET_HOME_DATA } from "../actions/types";

const initialState = {
  data: {},
  error: {},
};

function homeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HOME_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

export default homeReducer;
