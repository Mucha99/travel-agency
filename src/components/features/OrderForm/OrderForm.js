import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = ({cost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripsCost={cost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;