import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Compstyles/Descriptionstyle.css";

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
        <div className="login_button">
          <Button variant="primary" size="lg" onClick={this.handleShow}>
            Login
        </Button>
        </div>
        <Modal size="sm" show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Get Your $#!T Together!</Modal.Title>
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