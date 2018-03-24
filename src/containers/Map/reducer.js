import { MAP_URL_SET } from './actions';

const initialState = {
  url: 'https://tripgo.com/@/-33.8824444,151.2036305,11z'
}

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_URL_SET: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default tripReducer;
