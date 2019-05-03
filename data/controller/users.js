const User = require('../model/user');

var controlUser = {
    
    findUser: function(user, res, callback){
        console.log('inside findUser')
        var result = User.find(
            {userId: user.userId}
        )
        console.log('any result ', result);
        console.log('After find');
        
        
        
        callback(result, res);
        // var result = new Promise(function(resolve, reject){
        //     resolve(User.find(
        //         {userId: user.userId}
        //     ))
        // }).then(res=>console.log('This is Promise response',res))
        // .catch(err=>console.log('This is promise error', err))
    },

    sendResp: function(result, res){
        console.log('Inside callback');
        console.log(result.data);
        // res.send(result);
    },

    // findUser: async function(user, res){
    //     console.log('into find');
    //     console.log('xyz',user.userId);
    //     const result = User.find(
    //         {userId: user.userId}
    //     ).then(resp => {console.log('what yes or not ',resp)})
    //     .catch(err => {console.log('errorerror')});

    //     setTimeout(()=>{
    //         console.log('After 2 sec');
    //     }, 5000);

    //     console.log(result);
    //     res.send('hihi');
    //     console.log('I a into new Promise');
            
        // result.then( res=>{
        //     console.log('what is the result',res,'?')
        //     return res;
        // })
        // .catch(err=> {console.log('Some error occurred while searching', err)
        //     return err;
        // });

        // console.log("result returning ");
        
        // if (result.length === 0) {
        //     console.log('not result');
        //     res.send("User doesn't exist");
            
        //     // controlUser.createUser(user).catch(err=>{console.log('error occurred here', err)});
            
        // }
        // else{
        //     console.log('result');
        //     res.send('user already exists');
        // }
        // return result;

    // },
    
    createUser: async function(user){
        const newUser = new User(
            {
                userId: user.userId,
                password: user.password
            }
        )
    
        const result = await newUser.save();
        console.log('saved!');
        // return ({
        //     message: 'Successfully Signed Up!'
        // })
        result.then(res=>{
            console.log(res);
            return 'Successfully Signed Up!';
        })
        .catch(err=>{
            console.log('error occurred here', err);
            return 'Some error occurred';
        });
        
    }
    

}

module.exports = controlUser;