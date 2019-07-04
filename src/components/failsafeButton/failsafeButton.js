import React from 'react';
import { Button } from 'reactstrap';

const FailsafeButton = ({ downloadData }) => (
  <Button color="success" onClick={() => downloadData()}>
    Download deleted data
  </Button>
);

export default FailsafeButton;
