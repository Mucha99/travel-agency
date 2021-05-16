// className równy styles.icon oraz styles.iconActive – ale tylko jeśli dany element powinien być aktywny - JAK DODAĆ AKTYWNĄ KLASE ? 


import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, setOptionValue, required}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'}/>
        none
      </div>
    )}
    {values.map(value => (
      <div 
        key={value.id}
        onClick={() => setOptionValue(value.id)}  
      >
        <Icon name={value.icon}/>
        {value.name}({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcons;