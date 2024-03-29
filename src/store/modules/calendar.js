// actionTypes
export const SEARCHOBJ = 'calendar/SEARCHOBJ';
export const CHANGECATEGORIES = 'calendar/CHANGECATEGORIES';

// actions
export const changeSeach = (searchObj) => {
  return {
    type: SEARCHOBJ,
    payload: searchObj,
  };
};

export const changeCategories = (changeCategoriesArray) => {
  return {
    type: CHANGECATEGORIES,
    payload: changeCategoriesArray,
  };
};

// reducer
const initialState = {
  searchObj: {
    title: '',
  },
  changeCategoriesArray: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCHOBJ:
      return {
        ...state,
        searchObj: action.payload,
      };
    case CHANGECATEGORIES:
      return {
        ...state,
        changeCategoriesArray: action.payload,
      };
    default:
      return state;
  }
}
