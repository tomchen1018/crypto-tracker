let myCryptos = sessionStorage.getItem("myCryptos");
initService(myCryptos);

/**
 * Initialize my crypto watch list
 * use local service data for watchlist for demo 
 * @param {string} watchlist - The list of my cryptos
 */
function initService(watchlist) {
  if (!watchlist) {
    myCryptos = ["bitcoin", "ethereum", "dogecoin"];
    sessionStorage.setItem("myCryptos", myCryptos);
  } else {
    myCryptos = watchlist.split(",");
  }
}

/**
 * Get crpto from the watch list
 */
export const getMyCryptoService = () => {
  return myCryptos;
}

/**
 * Add crpto to watch list
 * @param {string} crypto - The name or symbol of the crypto.
 */
export const addMyCryptoService = (crypto) => {
  myCryptos.push(crypto.toLowerCase());
  sessionStorage.setItem("myCryptos", myCryptos);
  return myCryptos;
}

/**
 * Remove crpto to watch list
 * @param {object} cryptoDetails - The obj contains name and symbol of the crypto.
 */
export const removeMyCryptoService = (cryptoDetails) => {
  const { slug, symbol } = cryptoDetails;

  myCryptos = myCryptos.filter(crypto => {
    return crypto !== slug.toLowerCase() && crypto !== symbol.toLowerCase();
  });

  sessionStorage.setItem("myCryptos", myCryptos);
  return myCryptos;
}