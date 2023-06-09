const Candidate = require('../model/candidate');

const candidateRegister = async (req, res) => {
    
    const name = req.body.name;

    try{
        const candidateExist = await Candidate.findOne({name});
        if(candidateExist){
            return res.status(409).send({
                message: "Data kandidat sudah pernah dibuat."
            });
        }

    }catch(err){
        res.json({error: true, message: "Maaf, terjadi kesalahan."})
    }
    

    const newCandidate = Candidate({
        name: req.body.name,
        party_id: req.body.party_id,
        ballot_number: req.body.ballot_number,
        photo: "uploads/candidates/" + req.file.filename
    });
  
    newCandidate.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}


module.exports = {candidateRegister}