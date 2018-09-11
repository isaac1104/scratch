import * as types from './types';

export const saveTableNumber = (number, callback) => {
  return {
    type: types.SAVE_TABLE_NUMBER,
    payload: number
  };
  callback();
};
