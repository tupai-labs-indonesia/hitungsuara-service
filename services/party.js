const Party = require('../model/party');

const partyRegister = async (req, res) => {
    
    const alias = req.body.alias.toUpperCase();

    try{
        const partyExist = await Party.findOne({alias});
        if(partyExist){
            return res.status(409).send({
                message: "Partai sudah pernah dibuat."
            });
        }

    }catch(err){
        res.json({error: true, message: "Maaf, terjadi kesalahan."})
    }
    

    const newParty = Party({
        alias: req.body.alias,
        name: req.body.name,
        ballot_number: req.body.ballot_number,
        photo: "uploads/parties/" + req.file.filename
    });
  
    newParty.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}


module.exports = {partyRegister}