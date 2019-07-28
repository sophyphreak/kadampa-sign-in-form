import React from 'react';
import { Button } from 'reactstrap';

const LinkToTable = ({ getTableUrl }) => (
  <>
    <Button
      color="primary"
      href={`${getTableUrl()}`}
      style={{ padding: '1.5em', fontSize: '1.5em' }}
    >
      Go to data table
    </Button>
  </>
);

export default LinkToTable;
