const express = require('express');
const app = express();
const port = process.env.PORT == null ? 3000 : process.env.PORT;

app.use(express.static('public1'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})