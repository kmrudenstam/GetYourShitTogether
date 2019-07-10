import React from 'react';
// import Moment from 'moment';
import API from '../utils/API';

class Journal extends React.Component {
  state = {
    journal: [],
    title: "",
    entry: "",
  };

  componentDidMount() {
    this.loadJournal();
  }

  loadJournal = () => {
    API.getJournals()
      .then(res => 
        this.setState({
          journal: res.data,
          title: "",
          entry: ""
        }))
      .catch(err => console.log(err));
  };

  deleteJournal = id => {
    API.deleteJournal(id)
      .then(res => this.loadJournal())
      .catch(err => console.log(err));
  };

  render () {
    return (
    <div>
      <hr />
      {!this.state.journal.length ? (
        <h4>You haven't said $#!T</h4>
      ) : (
        <div>
        {this.state.journal.map(journal => (
          <div key={journal._id}>
            <h4>Title: {journal.title}</h4>
            <p>Date: 
              {/* <Moment format="MM/DD/YYYY"> */}
                {journal.date}
              {/* </Moment> */}
            </p>
            <p>Entry: {journal.entry}</p>
            <button
              type="delete"
              title="Delete $#!T"
              onClick={() => this.deleteJournal(journal._id)}
            >
              <span role="img" alt="X" aria-label="poo">💩</span>
            </button>
            <hr />
          </div>
        ))}
        </div>
      )}
  </div>)
}}


export default Journal;