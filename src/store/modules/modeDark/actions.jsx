import types from "./types";
export function setMode(mode) {
  return {
    type: types.setMode,
    payload: mode,
  };
}

export function getTheme() {
  return {
    type: types.getTheme,
  };
}
