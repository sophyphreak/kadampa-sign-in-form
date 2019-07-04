import XLSX from 'xlsx';
import moment from 'moment';

const downloadXlsx = personList => {
  const data = convertToArrayOfArrays(personList);
  const filename = getFilename();
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
  XLSX.writeFile(new_workbook, filename);
};

const convertToArrayOfArrays = personList => {
  const data = [
    ['', '', '', '', '', '', '', ''],
    [
      '',
      '#',
      'Name',
      'Email',
      'Hear About Us',
      'Amount Paid',
      'Payment Method',
      'Date'
    ],
    ['', '', '', '', '', '', '', '']
  ];
  personList.forEach((person, index) => {
    data.push([
      '',
      (index + 1).toString(),
      person.name,
      person.email,
      person.heardAboutUs,
      person.amountPaid,
      person.paymentMethod,
      moment(person.date).format('ddd, MMMM D, YYYY')
    ]);
  });
  return data;
};

const getFilename = () =>
  `KMC Signins ${moment().format('ddd, MMMM Do')} - Screen ${
    window.screen.width
  }x${window.screen.height}.xlsx`;

export default downloadXlsx;
