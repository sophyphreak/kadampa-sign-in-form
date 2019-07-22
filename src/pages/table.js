import React from 'react';
import queryString from 'query-string';
import XLSX from 'xlsx';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablePage = () => {
  const getData = () => {
    const parsed = queryString.parse(
      typeof window !== 'undefined' && window.location.search,
      {
        arrayFormat: 'bracket'
      }
    );
    const keys = Object.keys(parsed);
    return keys.map(key => parsed[key]);
  };
  const downloadXlsx = () => {
    let data = getData();
    const headers = data[0];
    data[0] = Array(7);
    data.unshift(Array(7));
    data.unshift(Array(7));
    data[1] = headers;
    data = data.map(row => {
      return [''].concat(row);
    });
    const lastDay = data[data.length - 1][data[0].length - 1];
    const filename = getFilename(lastDay);
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
    XLSX.writeFile(new_workbook, filename);
  };
  const getFilename = lastDay =>
    `KMC Signins - ${moment(lastDay).format('ddd, MMMM Do')}.xlsx`;
  return (
    <>
      <CopyToClipboard text={typeof window !== 'undefined' && window.location}>
        <Button color="primary" style={{ margin: '2em' }}>
          Copy this Url to Clipboard
        </Button>
      </CopyToClipboard>
      <Button color="success" style={{ margin: '2em' }} onClick={downloadXlsx}>
        Download .xlsx
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

export default TablePage;
