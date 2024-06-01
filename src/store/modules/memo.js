// actionTypes
export const CHANGEMEMOTYPE = 'calendar/CHANGEMEMOTYPE';

// actions
export const changeMemoType = (changeMemoType) => {
  return {
    type: CHANGEMEMOTYPE,
    payload: changeMemoType,
  };
};

// reducer
const initialState = {
  changeMemoType: {
    changeType: '',
    title: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEMEMOTYPE:
      return {
        ...state,
        changeMemoType: action.payload,
      };
    default:
      return state;
  }
}
