import React from 'react';

import ClearDataButton from './clearDataButton/clearDataButton';
import TableQueryButton from './TableQueryButton/TableQueryButton';

const AdminButtons = ({ clearState, getTableUrl }) => (
  <>
    <h1 style={{ textAlign: 'center' }}>
      <u>Admin Buttons</u>
    </h1>
    <br />
    <br />
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TableQueryButton getTableUrl={getTableUrl} />
      <ClearDataButton clearState={clearState} />
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
