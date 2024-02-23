// actionTypes
export const CHANGMODE = 'common/CHANGMODE';
export const LOGIN = 'common/LOGIN';
export const LOGOUT = 'common/LOGOUT';

// actions
export const changeMode = () => {
  return {
    type: CHANGMODE,
  };
};

export const login = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});

// reducer
const initialState = {
  isThemeMode: true,
  isAuthenticated: false,
  userData: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGMODE:
      return {
        ...state,
        isThemeMode: !state.isThemeMode,
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userData: {},
      };
    default:
      return state;
  }
}
