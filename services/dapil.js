const Dapil = require('../model/dapil');

const dapilRegister = async (req, res) => {

    const newDapil = Dapil({
        city: req.body.city,
        province: req.body.province,
        ballot_number: req.body.ballot_number,
        photo: "uploads/dapils/" + req.file.filename
    });
  
    newDapil.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}

module.exports = {dapilRegister}