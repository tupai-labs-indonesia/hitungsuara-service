const multer = require('multer');
const path = require('path');

// menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/users"));
    },
    filename: function (_req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

module.exports = {diskStorage};