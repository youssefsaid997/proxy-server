const express = require('express')
require("dotenv").config({path:"./config.env"})
const app = express()
const port = 3000

const API_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.API_KEY}&input=`
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.post('/api', async (req, res) => {
    const re = await fetch(API_URL+req?.query?.query)
    const data = await re.json()
    res.json({
        data
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))