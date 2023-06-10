const User = require('../model/user');

const userRegister = (req, res) => {
    const email = req.body.email;

    User.findOne({email}, (err, data) => {
        if(err) return console.log(err);
  
        if(data!= null){
            return res.status(409).send({
                message: "Email sudah pernah digunakan."
            });
        }
    })
    
    const newUser = User({
        name: req.body.name,
        username: req.body.username,
        email: email.toLowerCase(),
        phoneNumber: req.body.phoneNumber,
        address: {
            address1: req.body.address,
            city: req.body.city
        },
        tps: req.body.tps,
        dapil_id: req.body.dapil_id,
        team_id: req.body.team_id,
        photo: "uploads/users/" + req.file.filename
    });
  
    newUser.setPassword(req.body.password);
  
    newUser.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}

const userLogin = async (req, res) => {
    
    const {username, password} = req.body;

    if(username && password){
        try{
            const user = await User.findOne({username});
        
                if(user && user.validPassword(password)){
                    const token = jwt.sign(
                        { user_id: user._id, email, phoneNumber},
                        process.env.TOKEN_KEY,
                        {
                          expiresIn: "2h",
                        }
                      );
                      
                      const data = user;
                      data.token = token;

                      req.session.user = data;
                      return res.json(data);
                }else{
                    return res.status(400).json({
                        error : "Kredensial tidak valid"
                    });
                }
        }catch(err){
            return res.json({error: err});
        }
    }else{
        res.json({error: true, message: "Silahkan isi username dan password anda!"});
    }

}

module.exports = {userRegister, userLogin}