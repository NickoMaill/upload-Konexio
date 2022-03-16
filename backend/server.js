const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' })
const fs = require('fs');
const path = require('path');

const PORT = 8000

app.use(express.static('public'))

app.post('/upload', upload.single("image"), (req, res) => {
    fs.renameSync(
        req.file.path,
        path.join(req.file.destination, req.file.originalname)
    );
    res.send("Image receive");
});


app.listen(PORT, () => console.log("Listening on port 8000"));