import * as types from './types';

export const saveTableNumber = number => ({
  type: types.SAVE_TABLE_NUMBER,
  payload: number
});

export const saveDeviceUUID = uuid => ({
  type: types.SAVE_DEVICE_UUID,
  payload: uuid
});
