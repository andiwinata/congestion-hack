import { capitalizeFirstLetter } from 'containers/utils/utils';

export const COST = 'cost';
export const TIME = 'time';
export const ENVIRONMENT = 'environment';
export const HEALTH = 'health';

export const options = [
  COST, // moneyCost
  TIME, // arrive - depart / 60
  ENVIRONMENT, // carbonCost
  HEALTH, // caloriesCost
];

export const selectOptions = [
  { value: COST, label: `${capitalizeFirstLetter(COST)} (AUD)`},
  { value: TIME, label: `${capitalizeFirstLetter(TIME)} (Mins)`},
  { value: ENVIRONMENT, label: `${capitalizeFirstLetter(ENVIRONMENT)} (kg of CO2)`},
  { value: HEALTH, label: `${capitalizeFirstLetter(HEALTH)} (calories)`},
];
