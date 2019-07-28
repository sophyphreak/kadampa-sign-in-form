import React from 'react';

import Header from '../components/header';
import FailsafeComponent from '../components/failsafeComponent/failsafeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Failsafe = () => (
  <>
    <Header siteTitle="Failsafe" />
    <FailsafeComponent />
  </>
);

export default Failsafe;
