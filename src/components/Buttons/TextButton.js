import PropTypes from 'prop-types';
import { Button } from 'tailwind-mobile/react';
import './btn.scss'

const TextButton = (props) => {
  const { text, isBottomBtn } = props;
  const bottomBtn = isBottomBtn && 'bottom-btn';

  return (
    <div className={`grid crypto-btn-text ${bottomBtn}`}>
      <Button clear type='button'> {text} </Button>
    </div>
  );
}

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  isBottomBtn: PropTypes.bool
};

export default TextButton;