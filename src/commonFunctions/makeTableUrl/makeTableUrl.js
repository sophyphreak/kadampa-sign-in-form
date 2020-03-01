import queryString from 'query-string';
import moment from 'moment';

const makeTableUrl = personList => {
  const arrayOfArrays = convertToArrayOfArrays(personList);
  const query = queryString.stringify(arrayOfArrays, {
    arrayFormat: 'bracket'
  });
  return `/table/?${query}`;
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
      'Date',
      'Time'
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
      moment(person.date).format('ddd, MMMM D, YYYY'),
      moment(person.date).format('h:mm a')
    ]);
  });
  return data;
};

export default makeTableUrl;
