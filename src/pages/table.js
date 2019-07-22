import React from 'react';
import queryString from 'query-string';
import { Button, Table } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TablePage = () => {
  const getData = () => {
    const parsed = queryString.parse(window.location.search, {
      arrayFormat: 'bracket'
    });
    const keys = Object.keys(parsed);
    return keys.map(key => parsed[key]);
  };
  return (
    <>
      <CopyToClipboard text={window.location}>
        <Button color="primary" style={{ margin: '2em' }}>
          Copy this Url to Clipboard
        </Button>
      </CopyToClipboard>
      <Table style={{ margin: '2em' }}>
        {getData().map((row, index) => {
          if (index === 0) {
            return (
              <thead>
                {row.map(header => (
                  <th>{header}</th>
                ))}
              </thead>
            );
          } else {
            return (
              <tr>
                {row.map(cell => (
                  <td>{cell}</td>
                ))}
              </tr>
            );
          }
        })}
      </Table>
    </>
  );
};

export default TablePage;
