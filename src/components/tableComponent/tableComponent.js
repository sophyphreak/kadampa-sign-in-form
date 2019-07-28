import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Table } from 'reactstrap';
import getData from './getData/getData';
import downloadXlsx from './downloadXlsx/downloadXlsx';

const buttonStyle = {
  margin: '2em',
  fontSize: '1.5em',
  padding: '1.5em'
};

const TableComponent = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CopyToClipboard
          text={typeof window !== 'undefined' && window.location}
        >
          <Button color="primary" style={buttonStyle}>
            Copy this url to clipboard
          </Button>
        </CopyToClipboard>
        <Button color="success" style={buttonStyle} onClick={downloadXlsx}>
          Download .xlsx file
        </Button>
      </div>
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
          }
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
        })}
      </Table>
    </>
  );
};

export default TableComponent;
