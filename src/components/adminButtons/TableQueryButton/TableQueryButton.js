import React from 'react';
import { Button } from 'reactstrap';

const LinkToTable = props => (
  <>
    <Button color="link">
      <a href={`${props.getTableUrl()}`}>Go to data table</a>
    </Button>
  </>
);

export default LinkToTable;
