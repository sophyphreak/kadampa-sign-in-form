import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import FormikForm from '../../components/formikForm/formikForm';
import signInSchema from './signInSchema';
import BigSpace from '../../components/bigSpace/bigSpace';
import AdminButtons from '../../components/downloadButtons/downloadButtons';
import formInitialValues from './formInitialValues';
import getLocalStorage from './getLocalStorage/getLocalStorage';
import preparePerson from './preparePerson';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [],
      successModal: false
    };
    this.addSignIn = this.addSignIn.bind(this);
  }
  componentDidMount() {
    const personList = getLocalStorage('personList');
    this.setState(() => ({ personList }));
  }
  addSignIn(person) {
    this.setState({ successModal: true });
    person = preparePerson(person);
    const { personList } = this.state;
    personList.push(person);
    this.setState(() => ({ personList }));
    localStorage.setItem('personList', JSON.stringify(personList));
    setTimeout(() => {
      this.setState({ successModal: false });
      animateScroll.scrollToTop({ duration: 500 });
    }, 1500);
  }
  render() {
    return (
      <>
        <FormikForm
          initialValues={formInitialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            this.addSignIn(values);
            resetForm(formInitialValues);
            setSubmitting(false);
          }}
          successModal={this.state.successModal}
        />
        <BigSpace />
        <AdminButtons personList={this.state.personList} />
      </>
    );
  }
}

export default SignInForm;
