import React, { Component } from 'react';
import moment from 'moment';

import FormikForm from '../../components/formikForm/formikForm';
import signInSchema from './signInSchema';
import downloadXlsx from './downloadXlsx';
import BigSpace from '../../components/bigSpace/bigSpace';
import AdminButtons from '../../components/adminButtons/adminButtons';

const initialValues = {
  name: '',
  email: '',
  heardAboutUs: '',
  amountPaid: '',
  paymentMethod: ''
};

const getLocalStorage = () => {
  let local = [];
  if (!JSON.parse(localStorage.getItem('local'))) {
    return local;
  }
  return JSON.parse(localStorage.getItem('local'));
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: []
    };
    this.addSignIn = this.addSignIn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.downloadData = this.downloadData.bind(this);
  }
  componentDidMount() {
    const personList = getLocalStorage();
    this.setState(() => ({ personList }));
  }
  addSignIn(person) {
    person.date = moment().format('dddd, MMMM Do YYYY');
    const { personList } = this.state;
    personList.push(person);
    this.setState(() => ({ personList }));
    localStorage.setItem('local', JSON.stringify(personList));
  }
  clearState() {
    const personList = [];
    this.setState(() => ({ personList }));
    localStorage.clear();
  }
  downloadData() {
    const personList = this.state.personList;
    downloadXlsx(personList);
  }
  render() {
    return (
      <div>
        <FormikForm
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            this.addSignIn(values);
            resetForm(initialValues);
            setSubmitting(false);
          }}
        />
        <BigSpace />
        <AdminButtons
          downloadData={this.downloadData}
          clearState={this.clearState}
        />
      </div>
    );
  }
}

export default SignInForm;