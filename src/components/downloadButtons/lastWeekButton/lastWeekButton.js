import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';

import downloadXlsx from '../downloadXlsx/downloadXlsx';

const LastWeekButton = ({ personList }) => {
  const lastWeekList = personList.filter(person => {
    const now = moment();
    return now.diff(person.date, 'days') <= 7;
  });
  return (
    <>
      <Button
        color="secondary"
        onClick={() => downloadXlsx(lastWeekList)}
        style={{ padding: '1.5em', fontSize: '1.5em' }}
      >
        Last week
      </Button>
    </>
  );
};

export default LastWeekButton;
