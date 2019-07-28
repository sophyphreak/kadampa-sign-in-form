import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import FormikForm from '../../components/formikForm/formikForm';
import signInSchema from './signInSchema';
import downloadXlsx from './downloadXlsx/downloadXlsx';
import BigSpace from '../../components/bigSpace/bigSpace';
import AdminButtons from '../../components/adminButtons/adminButtons';
import formInitialValues from './formInitialValues';
import getLocalStorage from './getLocalStorage/getLocalStorage';
import preparePerson from './preparePerson';
import makeTableUrl from './makeTableUrl/makeTableUrl';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [],
      successModal: false
    };
    this.addSignIn = this.addSignIn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.downloadData = this.downloadData.bind(this);
    this.getTableUrl = this.getTableUrl.bind(this);
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
  clearState() {
    const oldLists = getLocalStorage('oldLists');
    oldLists.push(...this.state.personList);
    const personList = [];
    this.setState(() => ({ personList }));
    localStorage.clear();
    localStorage.setItem('personList', JSON.stringify(personList));
    localStorage.setItem('oldLists', JSON.stringify(oldLists));
  }
  downloadData() {
    const personList = this.state.personList;
    downloadXlsx(personList);
  }
  getTableUrl() {
    const personList = this.state.personList;
    const tableUrl = makeTableUrl(personList);
    return tableUrl;
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
        <AdminButtons
          personList={this.state.personList}
          downloadData={this.downloadData}
          clearState={this.clearState}
          getTableUrl={this.getTableUrl}
        />
      </>
    );
  }
}

export default SignInForm;
