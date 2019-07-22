import { convertArrayToCSV } from 'convert-array-to-csv';

const getTableQueryString = personList => {
  const arrayOfArrays = convertToArrayOfArrays(personList);
  const csvString = convertArrayToCSV(arrayOfArrays, {
    separator: ','
  });
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

export default getTableQueryString;
