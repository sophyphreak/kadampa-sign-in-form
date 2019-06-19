import React from 'react';
import { Field } from 'formik';
import { Input, Label } from 'reactstrap';
import Select from './select';
import BasicInput from '../basicInput/basicInput';

const SelectInput = ({ value, sectionLabel, selectLabels, componentName }) => (
  <>
    <Label for={componentName}>{sectionLabel}</Label>
    <br />
    <Input tag={Field} component="select" name={componentName}>
      <option value="">Please select</option>
      {selectLabels.map(label => (
        <Select label={label} />
      ))}
    </Input>
    {(value === 'Other' || value === 'other') && (
      <BasicInput componentName={`other.${componentName}`} />
    )}
  </>
);

export default SelectInput;
