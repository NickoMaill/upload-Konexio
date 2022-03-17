const path = require('path')

function checkTypeFile(req, res, next) {

    let type = path.extname(req.file.originalname)

    if (type !== ".jpg" && type !== ".jpeg" && type !== ".png" && type !== ".webp") {
        res.status(400).send("wrong pic format")
    }

    if (req.file.size > 5000000) {
        res.status(400).send("size too heavy")
    }

    next();
}

module.exports = checkTypeFile