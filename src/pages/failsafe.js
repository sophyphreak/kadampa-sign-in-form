import React from 'react';
import { Col } from 'reactstrap';

import Header from '../components/header';
import FailsafeContainer from '../containers/failsafe/failsafeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Failsafe = () => (
  <>
    <Header siteTitle="Failsafe" />
    <Col sm={{ offset: 5, size: 3 }}>
      <FailsafeContainer />
    </Col>
  </>
);

export default Failsafe;
