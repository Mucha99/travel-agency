import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option 
        key={value.id} 
        value={value.id}
      >
        {value.name}({formatPrice(value.price)})
      </option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionDropdown;