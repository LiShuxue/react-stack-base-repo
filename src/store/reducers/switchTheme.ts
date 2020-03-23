import * as types from '../actionTypes';

export const switchTheme = (state: string = 'dark', action: ActionType) => {
  switch (action.type) {
    case types.SWITCH_THEME:
      return action.data;
    default:
      return state;
  }
};
