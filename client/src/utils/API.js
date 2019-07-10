import axios from "axios"; 

export default {
  // Gets all shit
  getShit: function() {
    return axios.get("/api/shit");
  },
  // Gets the shit with the given id
  getOneShit: function(id) {
    return axios.get("/api/shit/" + id);
  },
  // Deletes the shit with the given id
  deleteShit: function(id) {
    return axios.delete("/api/shit/" + id);
  },
  // Saves a shit to the database
  saveShit: function(shitData) {
    return axios.post("/api/shit", shitData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Gets all journals
  getJournals: function() {
    return axios.get("/api/journal");
  },
  // Gets the journal with the given id
  getJournal: function(id) {
    return axios.get("/api/journal/" + id);
  },
  // Deletes the journal with the given id
  deleteJournal: function(id) {
    return axios.delete("/api/journal/" + id);
  },
  // Saves a journal to the database
  saveJournal: function(journalData) {
    return axios.post("/api/journal", journalData);
  }
};
