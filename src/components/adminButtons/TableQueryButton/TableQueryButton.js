import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TableQueryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      tableUrl: ''
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    let modalOpen = this.state.modalOpen;
    if (!modalOpen) {
      modalOpen = !modalOpen;
      const tableUrl = this.props.getTableUrl();
      this.setState(() => ({ tableUrl, modalOpen }));
    } else {
      modalOpen = !modalOpen;
      this.setState(() => ({ modalOpen }));
    }
  }
  render() {
    return (
      <>
        {this.state.modalOpen && (
          <Modal
            isOpen={this.state.modalOpen}
            toggle={this.toggleModal}
            centered={true}
          >
            <ModalHeader toggle={this.toggle}>
              Your data table will appear here
            </ModalHeader>
            <ModalBody>{this.state.tableUrl}</ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        )}
        <Button color="success" onClick={this.toggleModal}>
          Get Table Url
        </Button>
      </>
    );
  }
}

export default TableQueryButton;
