import { TRIP_REQUESTED } from './actions';

const tripReducer = (state = {}, action) => {
  switch (action.type) {
    case TRIP_REQUESTED: {
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
