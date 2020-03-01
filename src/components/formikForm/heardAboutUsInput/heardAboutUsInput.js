import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = [
  'Attended KMC Houston before',
  'Flyer',
  'Facebook/Instagram',
  'Meetup',
  'Our website',
  'Google search',
  'Friend/Family',
  'Walk by',
  'Other'
];

const HeardAboutUsInput = props => (
  <SelectInput
    sectionLabel="How'd you hear about us"
    componentName="heardAboutUs"
    selectLabels={selectLabels}
    {...props}
  />
);

export default HeardAboutUsInput;
