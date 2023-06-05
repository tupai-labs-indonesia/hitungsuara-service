const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv/config');

// Models
const User = require('./model/user');

// Utils
const multer = require('multer');
const upload = multer();
const { diskStorage } = require('./utils/disk-storage');
const { register } = require('./utils/user');

// Basic Config
try{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }, () => {console.log("Connected to MongoDB")});
}catch(err){
        console.log(err)
}

const port = process.env.PORT || 3000;

    // Use and Set
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.use(expressLayouts);
app.use(express.static('public'));
app.use(cors());

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: 'tupaitupaiapayangganteng',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay }
  }));
app.use(cookieParser());

/* Router */

app.get('/', (_req, res) => {
    res.render('index', {
      layout: false,
      title: "HitungSuara by tupailabs.com"
    })
});
      
app.get('/api', (_req, res) => {
  res.json({welcome:true, message: "Kamu memasuki API hitungsuara by TLI"});
});

/* [START] User Route */
app.post('/api/user/register', multer({storage: diskStorage}).single("photo"), (req, res) => register(req, res));
/* [END] User Route */





app.listen(port, () => {
    console.log(`Service HitungSuara listening on port ${port}`);
  });
  