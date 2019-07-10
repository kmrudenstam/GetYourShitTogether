import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import API from "../utils/API";

class Detail extends Component {
  state = {
    shit: []
  };
  // When this component mounts, grab the shit with the _id of this.props.match.params.id
  // e.g. localhost:3000/shit/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getOneShit(this.props.match.params.id)
      .then(res => this.setState({ shit: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
              <h1>
                {this.state.shit.item}
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10">
            <article>
              <h2>Description</h2>
              <p>
                Rating: {this.state.shit.rating}
              </p>
              <p>Description: {this.state.shit.journal}</p>
              <h3>What you said:</h3>
              <ul> 
                <li>Importance: {this.state.shit.importance}</li>
                <li>Sentiment: {this.state.shit.sentiment}</li>
                <li>Usefulness: {this.state.shit.usefulness}</li>
                <li>Replacability: {this.state.shit.replaceable}</li>
                <li>Danger: {this.state.shit.danger}</li>
              </ul>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/dashboard">← Back to Dashboard</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
