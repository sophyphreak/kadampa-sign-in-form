import React from 'react';

import Last24HoursButton from './last24HoursButton/last24HoursButton';
import LastWeekButton from './lastWeekButton/lastWeekButton';
import AllTimeButton from './allTimeButton/allTimeButton';

const AdminButtons = ({ personList }) => (
  <>
    <h1 style={{ textAlign: 'center' }}>
      <u>Download .xlsx file</u>
    </h1>
    <br />
    <br />
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Last24HoursButton personList={personList} />
      <LastWeekButton personList={personList} />
      <AllTimeButton personList={personList} />
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

export default AdminButtons;
