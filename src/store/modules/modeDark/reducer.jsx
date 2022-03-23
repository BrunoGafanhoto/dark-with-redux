import types from "./types";
const theme = (state = {}, action) => {
  switch (action.type) {
    case types.setMode:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};

export default theme;
