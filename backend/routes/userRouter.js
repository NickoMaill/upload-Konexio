const express = require('express')
const route = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' })
const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
const validUser = require('../middlewares/validUser')

//for test it in postman check formData in body blank and select file (not text)
// & write the key (in this exemple "image" but you can choose whatever you want) and the path of your img.

route.post("/", upload.single("image"), validUser, (req, res) => {

    users.push({
        userName: req.body.userName,
        profilePic: req.file.path,
    })

    fs.renameSync(
        req.file.path,
        path.join(req.file.destination, req.file.originalname)
    );
    res.json(users);
});

module.exports = route;