import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
    />
  </div>
);

OrderOptionDate.propTypes = { 
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;