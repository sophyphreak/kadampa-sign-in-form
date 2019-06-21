import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = ['Prepaid', '$10', '$35', 'Other'];

const AmountPaidInput = props => (
  <SelectInput
    sectionLabel="Amount Paid"
    componentName="amountPaid"
    selectLabels={selectLabels}
    {...props}
  />
);

export default AmountPaidInput;
