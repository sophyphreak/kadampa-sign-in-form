import React from 'react';
import { Col } from 'reactstrap';
import GoToTableButton from '../goToTableButton/goToTableButton';

import getLocalStorage from '../../containers/signInForm/getLocalStorage/getLocalStorage';
import makeTableUrl from '../../commonFunctions/makeTableUrl/makeTableUrl';

const FailsafeComponent = () => {
  const getTableUrl = () => {
    const oldLists = getLocalStorage('oldLists');
    const tableUrl = makeTableUrl(oldLists);
    return tableUrl;
  };

  return (
    <>
      <Col sm={{ offset: 3, size: 6 }}>
        <h2>Retrieve your deleted data by clicking the button below:</h2>
      </Col>
      <br />
      <br />
      <Col sm={{ offset: 4, size: 4 }}>
        <GoToTableButton getTableUrl={getTableUrl} />
      </Col>
    </>
  );
};

export default FailsafeComponent;
