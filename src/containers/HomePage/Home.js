import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { App, Page, Navbar, Icon } from 'tailwind-mobile/react';
import { getMyCryptos, removeMyCryptos } from '../../actions/crptos/crptosActionCreators';

import CryptoList from '../../components/CryptoList/CryptoList';
import TextButton from '../../components/Buttons/TextButton';
import Loader from '../../components/Loaders/Loader';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(true);
  const { cryptos } = useSelector((state) => state);
  const cryptosData = cryptos.data;
  let isBottomBtn = false;

  if (cryptosData) {
    isBottomBtn = cryptosData.length > 7;
  }

  const handleRemoveEvent = (crypto) => {
    dispatch(removeMyCryptos(crypto));
    setIsUpdated(true);
  }

  useEffect(() => {
    if (isUpdated) {
      setIsUpdated(false);
      dispatch(getMyCryptos());
    }

    // update data every 2 sec
    const interval = setInterval(() => dispatch(getMyCryptos()), 2000);

    return () => {
      clearInterval(interval);
    }
  }, [dispatch, isUpdated]);

  return (
    <App safeAreas>
      <Page className='crypto-home'>

        <Navbar
          title="CryptoTracker Pro"
          className='crypto-home-nav'
          right={
            <Icon
              material={
                <span className="material-icons">
                  account_circle
                </span>
              }
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
        />

        {
          cryptosData.length ?
            <CryptoList list={cryptosData} removeCrypto={handleRemoveEvent} /> :
            <Loader />
        }

        <Link to='/addmycrypto'>
          <TextButton
            text='+ Add a Crptocurrency'
            isBottomBtn={isBottomBtn}
          />
        </Link>

      </Page >
    </App>
  );
}

export default Home;
