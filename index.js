const express = require('express')
const cors = require('cors')
const app = express()
const port = 9988

const chefData = require('./data/chefdata.json')
const chefRecepie = require('./data/chef-recepie.json')
app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello world')
});

app.get('/allchef', (req, res)=>{
    res.send(chefData)
})

app.get('/allchef/:id', (req, res)=>{
    const id = req.params.id;
    const chefDetail = chefRecepie.find(detail => detail._id === id);
    res.send(chefDetail)
})

app.listen(port, ()=>{
    console.log('the port is running on: ', port)
})