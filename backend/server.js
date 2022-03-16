const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')

const PORT = 8000

app.use(express.static('public'));
app.use(express.json());
app.use("/upload", userRouter)

app.get("*", (_req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => console.log("Listening on port 8000"));