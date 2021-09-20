import * as CRYPTOS from './crptosActionTypes';

export function getMyCryptos() {
  return {
    type: CRYPTOS.GET_MY_CRYPTOS,
  };
}

export function getMyCryptosSuccess(data) {
  return {
    type: CRYPTOS.GET_MY_CRYPTOS_SUCCESS,
    data,
  };
}

export function getMyCryptosFailure(error) {
  return {
    type: CRYPTOS.GET_MY_CRYPTOS_FAILURE,
    error,
  };
}



export function addMyCryptos(data) {
  return {
    type: CRYPTOS.ADD_MY_CRYPTOS,
    data,
  };
}

export function addMyCryptosSuccess(data) {
  return {
    type: CRYPTOS.ADD_MY_CRYPTOS_SUCCESS,
  };
}

export function addMyCryptosFailure(error) {
  return {
    type: CRYPTOS.ADD_MY_CRYPTOS_FAILURE,
    error,
  };
}



export function removeMyCryptos(data) {
  return {
    type: CRYPTOS.REMOVE_MY_CRYPTOS,
    data,
  };
}

export function removeMyCryptosSuccess() {
  return {
    type: CRYPTOS.REMOVE_MY_CRYPTOS_SUCCESS
  };
}

export function removeMyCryptosFailure(error) {
  return {
    type: CRYPTOS.REMOVE_MY_CRYPTOS_FAILURE,
    error,
  };
}

