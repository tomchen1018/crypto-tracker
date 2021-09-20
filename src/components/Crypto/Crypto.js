import { useState } from "react";
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { ListItem } from 'tailwind-mobile/react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';

import PrimaryButton from '../Buttons/PrimaryButton';
import CryptoFooter from './CryptoFooter';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import './crypto.scss';

const Crypto = (props) => {
  const [showRemove, setShowRemove] = useState(false);
  const { crpto, removeCrypto } = props;
  const { id, name, slug, symbol, metrics } = crpto;
  const { price_usd, percent_change_usd_last_24_hours } = metrics ? metrics.market_data : null;

  const currentPrice = price_usd ? price_usd.toFixed(2) : '';
  const priceChanged = percent_change_usd_last_24_hours ? percent_change_usd_last_24_hours.toFixed(2) : '';
  const iconSrc = `https://messari.io/asset-images/${id}/32.png?v=2%20/`;

  const baseClass = 'crypto-item';

  const handleSwipeRightAction = () => {
    setShowRemove(false);
  }

  const handleSwipeLeftAction = () => {
    setShowRemove(true);
  }

  const handleBtnClickEvent = () => {
    removeCrypto({ slug, symbol });
  }

  return (
    <>
      <SwipeableList threshold={0.1}>
        <SwipeableListItem
          swipeLeft={{
            content: <div></div>,
            action: handleSwipeLeftAction
          }}
          swipeRight={{
            content: <div></div>,
            action: handleSwipeRightAction
          }}
        >

          <ListItem
            className={baseClass}
            media={
              <img src={iconSrc} alt='coin icon' />
            }
            title={
              <span className={`${baseClass}-name`}>
                {name}
              </span >
            }
            footer={
              priceChanged && <CryptoFooter shortName={symbol} changed={priceChanged} />
            }
            after={
              <>
                <CurrencyFormat
                  className={`${baseClass}-price`}
                  displayType={'text'}
                  value={currentPrice}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </>
            }
          />

          {showRemove && <PrimaryButton text='REMOVE' clickEvent={handleBtnClickEvent} />}

        </SwipeableListItem>
      </SwipeableList>

    </>

  )
}

Crypto.propTypes = {
  crpto: PropTypes.object.isRequired,
  removeCrypto: PropTypes.func.isRequired
};

export default Crypto;