import React from 'react';
import Header from '../components/header';
import TableComponent from '../components/tableComponent/tableComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

const TablePage = () => {
  return (
    <>
      <Header siteTitle="Data Table" />
      <TableComponent />
    </>
  );
};

export default TablePage;
