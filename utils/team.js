const Team = require('../model/team');

const teamRegister = async (req, res) => {
    const teamName = req.body.name.toUpperCase();

    try{
        const teamExist = await Team.findOne({name: teamName});
        if(teamExist){
            return res.status(409).send({
                message: "Nama tim sudah pernah digunakan."
            });
        }

    }catch(err){
        res.json({error: true, message: "Maaf, terjadi kesalahan."})
    }
    
    const newTeam = Team({
        name: req.body.name,
        category: req.body.category,
        is_active: req.body.is_active,
        photo: "uploads/teams/" + req.file.filename
    });
  
    newTeam.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}

module.exports = {teamRegister}