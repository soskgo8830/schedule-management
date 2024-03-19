// actionTypes
export const SEARCHOBJ = 'calendar/SEARCHOBJ';

// actions
export const changeSeach = (searchObj) => {
  return {
    type: SEARCHOBJ,
    payload: searchObj,
  };
};

// reducer
const initialState = {
  searchObj: {
    title: '',
    start: '',
    end: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCHOBJ:
      return {
        ...state,
        searchObj: action.payload,
      };
    default:
      return state;
  }
}
