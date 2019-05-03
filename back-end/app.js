const controlUser = require('../data/controller/users')
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Method', 'PUT, POST, GET, DELETE, PATCH');
        res.status(200).json({});
    }
    next();

});

app.post('/sign-up',(req, res)=>{
    const user = {
        userId: req.body.user.userId,
        password: req.body.user.password
    }
    console.log('1',user.userId);
    console.log('2',user.password);
    

    controlUser.findUser(user, res, controlUser.sendResp);
    
    console.log('xyz');
    // .then(res=>console.log('okay bro ',res))
    // .catch(err=>console.log('not bro ?', err));

    // console.log(result.length);
    
    // result.then(res=>{

    //     console.log('resultttttt',result);
    // })
})


module.exports = app;