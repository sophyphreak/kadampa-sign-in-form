import moment from 'moment';

let amountPaid = '$12';
let today = moment().format('dddd');
let hour = parseInt(moment().format('H'));
if (
  (today === 'Monday' || today === 'Tuesday' || today === 'Wednesday') &&
  hour < 16
) {
  amountPaid = '$6';
}

export default {
  name: '',
  email: '',
  heardAboutUs: '',
  amountPaid,
  paymentMethod: 'Cash',
  other: {
    heardAboutUs: '',
    amountPaid: '',
    paymentMethod: ''
  }
};
