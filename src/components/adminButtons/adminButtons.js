import React from 'react';
import { Button } from 'reactstrap';
import downloadXlsx from '../tableComponent/downloadXlsx/downloadXlsx';
import moment from 'moment';

import ClearDataButton from './clearDataButton/clearDataButton';
import TableQueryButton from '../goToTableButton/goToTableButton';

const AdminButtons = ({ clearState, getTableUrl, personList }) => (
  <>
    <h1 style={{ textAlign: 'center' }}>
      <u>Download .xlsx file</u>
    </h1>
    <br />
    <br />
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Last24HoursButton personList={personList} />
      <LastWeekButton personList={personList} />
      <DownloadAllTimeButton personList={personList} />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

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

const DownloadAllTimeButton = ({ personList }) => (
  <>
    <Button
      color="danger"
      onClick={() => downloadXlsx(personList)}
      style={{ padding: '1.5em', fontSize: '1.5em' }}
    >
      All time
    </Button>
  </>
);

export default AdminButtons;
