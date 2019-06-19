import React from 'react';
import { Field } from 'formik';
import { Label, Input, FormFeedback } from 'reactstrap';

const BasicInput = ({
  componentName,
  label,
  type,
  error,
  touched,
  autoFocus = false
}) => (
  <>
    <Label for={componentName}>{label}</Label>
    <Input
      autoFocus={autoFocus}
      type={type}
      name={componentName}
      tag={Field}
      invalid={error && touched}
      autoComplete="off"
      onKeyPress={e => {
        e.key === 'Enter' && e.preventDefault();
      }}
    />
    <FormFeedback>{error}</FormFeedback>
  </>
);

export default BasicInput;
