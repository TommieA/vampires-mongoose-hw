// 1. Require your node modules
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override')
const mongoose       = require('mongoose');


// 2. Require your model (and possibly your extra data source);
const vampire        = require('./models/vampire.js');
const vampireData    = require('./db/populateVampires.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'This is a random secret string that you would make up to protect your session',
    resave: false, 
    saveUninitialized: false 
  }))




// 3. Connect your database and collection name
require('./db/db');

// 4. Open your mongoose connection

mongoose.connect('mongodb://localhost/vampires', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', ()=> {
    console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose diconnected from ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});



/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// vampire.collection.insertMany(vampireInfo, (err, data) => {
//     console.log(vampireInfo);
//     mongoose.connection.close();
// });
// ### Add some new vampire data
vampire.create({
    name: 'Tommie',
    hair_color: 'black',
    eye_color: 'hazel',
    dob: new Date(1964, 5, 02, 7, 47),
    loves: 'sleeping',
    location: 'Denver, Colorado', 
    gender: 'm',
    victims: '22'
}, (err, newVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(newVamp);
    }
});

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
//find all vampires with less than 1000 victims
// vampire.find({victims: {$lt: '1000'}}, 
// (err, vampsWithouManyKills) => {
// if(err){
//     console.log(err);
// }else{
//     console.log(vampsWithouManyKills);
// }
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
//  vampire.find({title: {$exists: true}}, (err, vampsWithTitles)=>{
//     if(err){
//         console.log(err);
//     } else { 
//         console.log(vampsWithTitles);
//     }
// });

/////////////////////////////////////////////////
// ### Select with OR
// vampire.find({$or: [{eye_color: 'hazel'}, {hair_color: 'black'}] },
// (err,vampsWithDiffs) => {
//     if(err){
//         console.log(err);
//     } else { 
//         console.log(vampsWithDiffs);
//     }
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values
// vampire.find({name: {$exists: true}}, 
//   (err, vampNamedSteve) => {
//       if(err) {
//           console.log(err);
//       } else {
//           console.log(vampNamedSteve);
//       }
//   })

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
