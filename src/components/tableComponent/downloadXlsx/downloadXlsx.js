import XLSX from 'xlsx';
import moment from 'moment';
import getData from '../getData/getData';

const downloadXlsx = inputData => {
  // let data = getData();
  // const headers = data[0];
  // data[0] = Array(7);
  // data.unshift(Array(7));
  // data.unshift(Array(7));
  // data[1] = headers;
  // data = data.map(row => {
  //   return [''].concat(row);
  // });
  console.log(inputData)

  let data = inputData.map(function(obj) {
    return Object.keys(obj).map(function(key) { 
      return obj[key];
    });
  });

  // const keys = Object.keys(inputData);
  // let data = keys.map(key => inputData[key])
  // const headers = data[0];
  // data[0] = Array(7);
  // data.unshift(Array(7));
  // data.unshift(Array(7));
  // data[1] = headers;
  data = data.map(row => {
    return [''].concat(row);
  });

  console.log(data);

  const lastDay = data[data.length - 1][data[0].length - 1];
  const filename = getFilename(lastDay);
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
  XLSX.writeFile(new_workbook, filename);
};

const getFilename = lastDay =>
  `KMC Signins - ${moment(lastDay).format('ddd, MMMM Do')}.xlsx`;

export default downloadXlsx;
