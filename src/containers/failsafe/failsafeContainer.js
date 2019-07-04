import React from 'react';
import FailsafeButton from '../../components/failsafeButton/failsafeButton';

import downloadXlsx from '../downloadXlsx/downloadXlsx';
import getLocalStorage from '../getLocalStorage/getLocalStorage';

const FailsafeContainer = () => {
  const downloadData = () => {
    const oldLists = getLocalStorage('oldLists');
    downloadXlsx(oldLists);
  };

  return <FailsafeButton downloadData={downloadData} />;
};

export default FailsafeContainer;
