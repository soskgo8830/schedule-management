// actionTypes
export const CHANGMODE = 'common/CHANGMODE';

// actions
export const changeMode = () => {
  return {
    type: CHANGMODE,
  };
};

// reducer
const initialState = {
  isThemeMode: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGMODE:
      return {
        ...state,
        isThemeMode: !state.isThemeMode,
      };
    default:
      return state;
  }
}
