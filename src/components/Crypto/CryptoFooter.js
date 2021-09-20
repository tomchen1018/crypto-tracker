import PropTypes from 'prop-types';

const CryptoFooter = (props) => {
  const { shortName, changed } = props;
  const isLoss = Number(changed) < 0;

  const changedClass = isLoss && 'loss';
  const iconClass = "material-icons md-18";

  return (
    <>
      <span>{shortName}</span>
      <span className={`crypto-item-changed ${changedClass}`}>
        {
          isLoss ?
            <span className={iconClass}>
              south_east
            </span> :
            <span className={iconClass}>
              north_east
            </span>
        }

        {changed}%
      </span>
    </>
  )
}

CryptoFooter.propTypes = {
  shortName: PropTypes.string.isRequired,
  changed: PropTypes.string.isRequired
};

export default CryptoFooter;