const User = require('../model/user');

const register = (req, res) => {
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
        id_dapil: req.body.id_dapil,
        id_tim: req.body.id_tim,
        photo: "uploads/users/" + req.file.filename
    });
  
    newUser.setPassword(req.body.password);
  
    newUser.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}

module.exports = {register}