import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import FormikForm from '../../components/formikForm/formikForm';
import signInSchema from './signInSchema';
import BigSpace from '../../components/bigSpace/bigSpace';
import AdminButtons from '../../components/adminButtons/adminButtons';
import formInitialValues from './formInitialValues';
import getLocalStorage from './getLocalStorage/getLocalStorage';
import preparePerson from './preparePerson';
import makeTableUrl from '../../commonFunctions/makeTableUrl/makeTableUrl';
import downloadXlsx from '../../components/tableComponent/downloadXlsx/downloadXlsx';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldLists: [],
      personList: [],
      successModal: false
    };
    this.addSignIn = this.addSignIn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.getTableUrl = this.getTableUrl.bind(this);
  }
  componentDidMount() {
    const personList = getLocalStorage('personList');
    const oldLists = getLocalStorage('oldLists');
    this.setState(() => ({ personList, oldLists }));
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
  getTableUrl() {
    const personList = this.state.personList;
    const tableUrl = makeTableUrl(personList);
    return tableUrl;
  }
  render() {
    return (
      <>
        <button onClick={() => downloadXlsx(this.state.oldLists)}>click me</button>
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
          clearState={this.clearState}
          getTableUrl={this.getTableUrl}
        />
      </>
    );
  }
}

export default SignInForm;
