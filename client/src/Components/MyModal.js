import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class MyModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Login to Get Your $#!T Together</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <label>
                Username
    <input type="text" name="test" />
              </label>
              <label>
                Password
    <input type="text" name="test" />
              </label>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button href="/dashboard" variant="primary">Login</Button>

            <Button variant="primary" onClick={this.handleClose}>
              Cancel
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}