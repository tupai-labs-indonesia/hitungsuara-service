const Privilege = require('../model/privilege');
const UserPrivilege = require('../model/userPrivilege');

const privilegeRegister = async (req, res) => {
    
    const name = req.body.name;

    console.log(req.body);

    try{
        const privExist = await Privilege.findOne({name});
        if(privExist){
            return res.status(409).send({
                message: "Hak privilige sudah pernah dibuat."
            });
        }

    }catch(err){
        res.json({error: true, message: "Maaf, terjadi kesalahan."})
    }
    

    const newPrivilege = Privilege({
        name: req.body.name,
        is_active: req.body.is_active,
    });
  
    newPrivilege.save((err, data) => {
        if(err) console.log(err);
        res.json(data);
    });
}

const userPrivilegeRegister = async (req, res) => {
    
    const user_id = req.body.user_id;

    try{
        const userPrivExist = await UserPrivilege.findOne({user_id});
        if(userPrivExist){
            return res.status(409).send({
                message: "Pengguna sudah memiliki hak privilege"
            });
        }

    }catch(err){
        res.json({error: true, message: "Maaf, terjadi kesalahan."})
    }
    

    const newUserPrivilege = UserPrivilege({
        user_id: req.body.user_id,
        privilege_id: req.body.privilege_id,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by,
    });
  
    newUserPrivilege.save((err, data) => {
        if(err) console.log(err);
        req.session.user = data;
        res.json(data);
    });
}

module.exports = {privilegeRegister, userPrivilegeRegister}