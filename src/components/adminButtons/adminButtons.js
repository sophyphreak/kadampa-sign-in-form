import React from 'react';

import SeeNamesButton from './seeNamesButton/seeNamesButton';
import DownloadXlsxButton from './downloadXlsxButton/downloadXlsxButton';
import ClearDataButton from './clearDataButton/clearDataButton';

const AdminButtons = ({ personList, downloadData, clearState }) => (
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
    <ClearDataButton clearState={clearState} />
  </>
);

export default AdminButtons;
