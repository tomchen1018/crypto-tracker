import PropTypes from 'prop-types';
import { List } from 'tailwind-mobile/react';
import Crypto from '../Crypto/Crypto';

import './CryptoList.scss'

const CryptoList = (props) => {
  const { list, removeCrypto } = props;

  return (
    <>
      <List className='crypto-list' inset>
        {
          list.map((item) => {
            return (
              <Crypto crpto={item} key={item.id} removeCrypto={(crypto) => removeCrypto(crypto)} />
            )
          })
        }
      </List>
    </>
  );
}

CryptoList.propTypes = {
  list: PropTypes.array.isRequired,
  removeCrypto: PropTypes.func.isRequired
};

export default CryptoList;