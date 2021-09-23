import { takeEvery, put } from "redux-saga/effects";
import { requestGet } from "../utils/requests";
import {
  getMyCryptoService,
  addMyCryptoService,
  removeMyCryptoService
} from "../services/cryptoService";

import * as CRPTOS from '../actions/crptos/crptosActionTypes';
import * as crptosActionCreators from '../actions/crptos/crptosActionCreators';

const endpoint = {
  url: 'https://data.messari.io/api/v2/assets?fields=id,slug,name,symbol,metrics/market_data&limit=200',
};

/**
 * Get Watched Cryptos
 * messari API does not support get watchlist
 * get first 200 crptos and filter local watchlist for demo purpose
 */
export function* getMyCryptos() {
  try {
    const response = yield requestGet(endpoint);

    if (response && response.data) {
      const { data } = response.data;
      const myWatchList = getMyCryptoService();

      let myCryptos = data.filter((coin) => {
        const hasSlug = coin.slug && myWatchList.includes(coin.slug);
        const hasSymbol = coin.symbol && myWatchList.includes(coin.symbol.toLowerCase());

        return hasSlug || hasSymbol;
      });

      yield put(crptosActionCreators.getMyCryptosSuccess(myCryptos));
    }

  } catch (err) {
    yield put(crptosActionCreators.getMyCryptosFailure(err));
  }
}

/**
 * Add Watched Crpto
 * @param {object} crypto - The crypto will be added
 */
export function* addMyCrypto(crypto) {
  try {
    const response = yield addMyCryptoService(crypto.data);

    if (response) {
      yield put(crptosActionCreators.addMyCryptosSuccess());
    }

  } catch (err) {
    yield put(crptosActionCreators.addMyCryptosFailure(err));
  }
}

/**
 * Remove Watched Crpto
 * @param {object} crypto - The crypto will be removed
 */
export function* removeMyCrypto(crypto) {
  try {
    const response = yield removeMyCryptoService(crypto.data);

    if (response) {
      yield put(crptosActionCreators.removeMyCryptosSuccess());
    }

  } catch (err) {
    yield put(crptosActionCreators.removeMyCryptosFailure(err));
  }
}


export function* loadMyCryptosWatcher() {
  yield takeEvery(CRPTOS.GET_MY_CRYPTOS, getMyCryptos);
  yield takeEvery(CRPTOS.ADD_MY_CRYPTOS, addMyCrypto);
  yield takeEvery(CRPTOS.REMOVE_MY_CRYPTOS, removeMyCrypto);
}
