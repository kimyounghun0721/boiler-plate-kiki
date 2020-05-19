const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimyh:abcd1234@boilercluster-q7aiw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB RUN...'))



app.get('/', (req, res) => res.send('kimyh World! 엄마가 부른다'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))