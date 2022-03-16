const express = require('express');
const app = express();
const upload = require('multer');

const PORT = 8000

app.use(express.static('public'))


app.listen(PORT, () => console.log("Listening on port 8000"));