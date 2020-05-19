const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User"); 

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
 
//application/ json타입을 분석하여 가지고
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimyh:abcd1234@boilercluster-q7aiw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB RUN...'))



app.get('/', (req, res) => res.send('kimyh World! 엄마가 부른다'))

app.post('/register', (reg, res) => {
    //회원가입 시 필요한 정보를 Client에서 가져오면 DB에 넣어줌 
    const user = new User(req.body)  

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err }) //에러가 발생할 경우 에러메시지 출력
        return res.status(200).json({ //성공했을 경우 유저정보 출력
            success: true
        })
    })
})
 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))