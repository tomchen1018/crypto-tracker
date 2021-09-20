import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { Navbar } from 'tailwind-mobile/react';
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { addMyCryptos } from '../../actions/crptos/crptosActionCreators';

import './addMyCrypto.scss';

const AddMyCrypto = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isValidInput, setIsValidInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addCryptoEvent = () => {
    dispatch(addMyCryptos(inputValue));
    history.push("/");
  }

  const inputChangeEvent = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    inputValue ? setIsValidInput(true) : setIsValidInput(false);
  }, [inputValue])

  return (
    <div className='crypto-add'>
      <Navbar
        className="top-0 sticky"
        left={<Link to='/' navbar='false'> {'< Back to list'}</Link>}
      />

      <div className='crypto-add-content'>
        <h2>Add a Cryptocurrency</h2>
        <input type="text" placeholder="Use a name or ticker symbol..." onChange={inputChangeEvent} />
        <PrimaryButton clickEvent={addCryptoEvent} isDisabled={!isValidInput} text='ADD' />
      </div>
    </div>
  )
}

export default AddMyCrypto;