const User = require('../model/user');

var controlUser = {
    
    findUser: async function(user, res){
        const result = await User.find(
            {userId: user.userId}
        )
        
        if(result.length === 0){
            const result = await controlUser.createUser(user, res)
            
            console.log('RESULT',result);

            res.send({
                message: 'User Registered',
                data: result
            })



        }
        else{
            res.send(
                {
                    message: 'user already exists'
                }
            )
        }
    },

    createUser: async function(user, res){
        const newUser = new User(
            {
                userId: user.userId,
                password: user.password
            }
        )
    
        const result = await newUser.save();
        return result;

    }
    

}

module.exports = controlUser;