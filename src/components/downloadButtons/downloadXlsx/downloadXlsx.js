import XLSX from 'xlsx';
import moment from 'moment';

const downloadXlsx = personList => {
  const data = convertToArrayOfArrays(personList);
  const lastDay = data[data.length - 1][data[0].length - 1];
  const filename = getFilename(lastDay);
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
  XLSX.writeFile(new_workbook, filename);
};

const convertToArrayOfArrays = personList => {
  console.log(personList);
  const data = [
    Array(10),
    [
      '',
      '#',
      'Name',
      'Email',
      'Hear About Us',
      'Amount Paid',
      'Payment Method',
      'Day',
      'Time',
      'Date'
    ],
    Array(10)
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
      moment(person.date).format('dddd'),
      moment(person.date).format('h:mm a'),
      moment(person.date).format('MMMM D, YYYY')
    ]);
  });
  return data;
};

const getFilename = lastDay =>
  `KMC Signins - ${moment(lastDay).format('ddd, MMMM Do')}.xlsx`;

export default downloadXlsx;
