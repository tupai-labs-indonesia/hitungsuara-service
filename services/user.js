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

module.exports = {userRegister}