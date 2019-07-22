import { convertArrayToCSV } from 'convert-array-to-csv';
import moment from 'moment';

const makeTableUrl = personList => {
  const arrayOfArrays = convertToArrayOfArrays(personList);
  console.log(arrayOfArrays);
  const csvString = convertArrayToCSV(arrayOfArrays, {
    separator: ';'
  });
  console.log(csvString);
  return `https://kadampa-signin.netlify.com/table/?data=${csvString}`;
};

const convertToArrayOfArrays = personList => {
  const data = [
    [
      '#',
      'Name',
      'Email',
      'Hear About Us',
      'Amount Paid',
      'Payment Method',
      'Date'
    ]
  ];
  personList.forEach((person, index) => {
    data.push([
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

export default makeTableUrl;
