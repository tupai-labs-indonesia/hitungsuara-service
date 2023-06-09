const Dapil = require('../model/dapil');

const dapilRegister = async (req, res) => {
    
    const city = req.body.city;
    const province = req.body.province;
    const ballot_number = req.body.ballot_number;

    try{
        const dapilExist = await Dapil.findOne({city, province, ballot_number});
        if(dapilExist){
            return res.status(409).send({
                message: "Dapil sudah pernah terdaftar."
            });
        }

    }catch(err){
        res.json({error: true, message: "Maaf, terjadi kesalahan."})
    }
    

    const newDapil = Dapil({
        city: req.body.city,
        province: req.body.province,
        number: req.body.number,
        photo: "uploads/dapils/" + req.file.filename
    });
  
    newDapil.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}

module.exports = {dapilRegister}