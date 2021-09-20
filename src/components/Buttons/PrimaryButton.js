import PropTypes from 'prop-types';
import { Button } from 'tailwind-mobile/react';

import './btn.scss'

const PrimaryButton = (props) => {
  const { text, clickEvent, isDisabled } = props;

  return (
    <Button
      className='crypto-btn-primary'
      type='button'
      disabled={isDisabled}
      onClick={clickEvent}>{text}</Button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default PrimaryButton;