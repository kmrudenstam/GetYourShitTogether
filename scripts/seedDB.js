const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/getyourshittogether"
);

const shitSeed = [
   {
    item: "Old Mail",
    importance: 1,
    sentiment: 2,
    usefulness: 3,
    replaceable: 4,
    danger: 5,
    journal: "Unopened mail from years ago. Afriad to open.",
    rating: 3,
    date: new Date(Date.now())
  } 
];

const userSeed = [
  {
    userName: "User1",
    password: "password"
  }
];

db.Shit
  .remove({})
  .then(() => db.Shit.collection.insertMany(shitSeed))
  .then(data => {
    console.log(data.result.n + " shit inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
