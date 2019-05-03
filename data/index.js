const mongoose = require('mongoose');
const controlUser = require('./controller/users');
options = {
    useNewUrlParser: true
}

mongoose.connect('mongodb://localhost:27017/myDb', options)
.then(()=>{console.log('connected to mongodb...')})
.catch(err=>{console.error('could not connect to mongodb.. Some Error Occurred')}
);
// const user = {
//     userId: 'abc',
//     password: '1256'
// }

// controlUser.findUser(user).catch(err=>{console.log(err)});