import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Table } from 'reactstrap';
import getData from './getData/getData';
import downloadXlsx from './downloadXlsx/downloadXlsx';

const TableComponent = () => {
  return (
    <>
      <CopyToClipboard text={typeof window !== 'undefined' && window.location}>
        <Button color="primary" style={{ margin: '2em' }}>
          Copy this url to clipboard
        </Button>
      </CopyToClipboard>
      <Button color="success" style={{ margin: '2em' }} onClick={downloadXlsx}>
        Download .xlsx file
      </Button>
      <Table style={{ margin: '2em' }}>
        {getData().map((row, index) => {
          if (index === 0) {
            return (
              <thead>
                <tr>
                  {row.map(header => (
                    <th>{header}</th>
                  ))}
                </tr>
              </thead>
            );
          } else {
            return (
              <tr>
                {row.map((cell, index) => {
                  if (!index) {
                    return <th scope="row">{cell}</th>;
                  }
                  return <td>{cell}</td>;
                })}
              </tr>
            );
          }
        })}
      </Table>
    </>
  );
};

export default TableComponent;
