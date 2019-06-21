import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = ['Prepaid', 'Cash', 'Credit card', 'Other'];

const PaymentMethodInput = props => (
  <SelectInput
    sectionLabel="Payment Method"
    componentName="paymentMethod"
    selectLabels={selectLabels}
    {...props}
  />
);

export default PaymentMethodInput;
