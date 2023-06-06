const multer = require('multer');
const path = require('path');

// menentukan lokasi pengunggahan
const userStorage = multer.diskStorage({
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

  const teamStorage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/teams"));
    },
    filename: function (_req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const dapilStorage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/dapils"));
    },
    filename: function (_req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const candidateStorage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/candidates"));
    },
    filename: function (_req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const partyStorage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/parties"));
    },
    filename: function (_req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const voteStorage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/votes"));
    },
    filename: function (_req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

module.exports = {userStorage, teamStorage, dapilStorage, candidateStorage, partyStorage, voteStorage};