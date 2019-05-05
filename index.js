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
    // next();    

});

app.use('/', require('./routes'))

const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`Server started on this port ${port}`)})