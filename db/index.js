const mongoose = require('mongoose');
const controlUser = require('./controller/users');
options = {
    useNewUrlParser: true
}

mongoose.connect('mongodb://localhost:27017/myDb', options)
.then(()=>{console.log('connected to mongodb...')})
.catch(err=>{console.error('could not connect to mongodb.. Some Error Occurred')}
);

module.exports = mongoose;