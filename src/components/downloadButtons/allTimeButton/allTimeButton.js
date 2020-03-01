import React from 'react';
import { Button } from 'reactstrap';

import downloadXlsx from '../downloadXlsx/downloadXlsx';

const AllTimeButton = ({ personList }) => (
  <>
    <Button
      color="danger"
      onClick={() => downloadXlsx(personList)}
      style={{ padding: '1.5em', fontSize: '1.5em' }}
    >
      All time
    </Button>
  </>
);

export default AllTimeButton;
