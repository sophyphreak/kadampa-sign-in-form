import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ClearDataModal from './clearDataModal/clearDataModal';
import SuccessModal from './successModal/successModal';

class ClearStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearDataModal: false,
      successModal: false
    };

    this.triggerClearState = this.triggerClearState.bind(this);
    this.toggleClearDataModal = this.toggleClearDataModal.bind(this);
  }
  triggerClearState() {
    this.toggleClearDataModal();
    this.setState({ successModal: true });
    this.props.clearState();
    setTimeout(() => {
      this.setState({ successModal: false });
    }, 3000);
  }
  toggleClearDataModal() {
    this.setState(prevState => ({
      clearDataModal: !prevState.clearDataModal
    }));
  }
  render() {
    return (
      <div>
        <Button
          color="warning"
          onClick={() => this.toggleClearDataModal()}
          style={{ padding: '1.5em', fontSize: '1.5em' }}
        >
          Clear data
        </Button>
        <ClearDataModal
          clearDataModal={this.state.clearDataModal}
          triggerClearState={this.triggerClearState}
          toggleClearDataModal={this.toggleClearDataModal}
        />
        <SuccessModal successModal={this.state.successModal} />
      </div>
    );
  }
}

export default ClearStateButton;
