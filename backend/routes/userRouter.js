const express = require('express')
const route = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' })
const fs = require('fs');
const path = require('path');
const users = require('../data/users.json')
const validUser = require('../middleware/validUserName')
const verifyTypeFile = require('../middleware/verifyFile')
const cors = require('../middleware/cors')
const dayjs = require('dayjs')

//for test it in postman check formData in body blank and select file (not text)
// & write the key (in this exemple "image" but you can choose whatever you want) and the path of your img.

route.get("/", cors, (_req, res) => {

    res.json(users)
})

route.post("/", upload.single("image"), validUser, verifyTypeFile, cors, (req, res) => {

    let type = path.extname(req.file.originalname)
    users.push({
        userName: req.body.userName,
    })

    fs.renameSync(
        req.file.path,
        path.join(req.file.destination, `${req.body.userName}-${dayjs().format('DD-MM-YYYY-HH:mm')}.${type}`)
    );
    console.log(users);
    res.json(users);
});

module.exports = route;