import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';

import downloadXlsx from '../downloadXlsx/downloadXlsx';

const Last24HoursButton = ({ personList }) => {
  const last24HoursList = personList.filter(person => {
    const now = moment();
    return now.diff(person.date, 'days') <= 1;
  });
  return (
    <>
      <Button
        color="primary"
        onClick={() => downloadXlsx(last24HoursList)}
        style={{ padding: '1.5em', fontSize: '1.5em' }}
      >
        Last 24 hours
      </Button>
    </>
  );
};

export default Last24HoursButton;
