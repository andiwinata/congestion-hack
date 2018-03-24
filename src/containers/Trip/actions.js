export const TRIP_REQUESTED = 'TRIP_REQUESTED';

export const tripRequested = (from, to, option1, option2) => {
  return {
    type: TRIP_REQUESTED,
    payload: {
      from,
      to,
      option1,
      option2,
    },
  };
};
