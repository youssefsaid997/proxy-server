const express = require('express')
const app = express()
const port = 3000

const API_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCyrbNMU_8tfgo9HqCVaP5XVQZnph6mSe8&input="
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.post('/api', async (req, res) => {
    console.log(req?.query?.query)
    const re = await fetch(API_URL+req?.query?.query)
    const data = await re.json()
    console.log(data);
    res.json({
        data
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))