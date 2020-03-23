import * as types from '../actionTypes';

export const switchTheme = (theme: string): ActionType => {
  return {
    type: types.SWITCH_THEME,
    data: theme
  };
};
