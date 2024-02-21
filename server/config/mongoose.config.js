const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/expense_report', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You've Established a connection "))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
