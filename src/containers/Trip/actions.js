export const TRIP_REQUESTED = 'TRIP_REQUESTED';

export const tripRequested = (from, to) => {
  return {
    type: TRIP_REQUESTED,
    payload: {
      from,
      to,
    },
  };
};
