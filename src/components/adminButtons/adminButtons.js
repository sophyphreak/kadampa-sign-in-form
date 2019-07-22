import React from 'react';

import SeeNamesButton from './seeNamesButton/seeNamesButton';
import DownloadXlsxButton from './downloadXlsxButton/downloadXlsxButton';
import ClearDataButton from './clearDataButton/clearDataButton';
import TableQueryButton from './TableQueryButton/TableQueryButton';

const AdminButtons = ({
  personList,
  downloadData,
  clearState,
  getTableUrl
}) => (
  <>
    <SeeNamesButton personList={personList} />
    <br />
    <br />
    <br />
    <br />
    <DownloadXlsxButton downloadData={downloadData} />
    <br />
    <br />
    <br />
    <br />
    <TableQueryButton getTableUrl={getTableUrl} />
    <br />
    <br />
    <br />
    <br />
    <ClearDataButton clearState={clearState} />
    <br />
    <br />
    <br />
  </>
);

export default AdminButtons;
