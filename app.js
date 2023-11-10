const express = require('express')
const app = express()
app.use(express.json())

let users=[{name: 'Ömer', id: 1},
{name: 'Ali', id: 2}]

app.use((req,res,next) => {
    console.log('İstek geldi: ' + Date.now())

    if (req.get('token')) {
        next()
    }else{
        res.status(401).send('yetkisiz giriş')
    }
})

app.get('/user/:name', function (req, res) {
    console.log('get isteği')

    let user=users.find((item)=>item.id == req.query.id) //querydeki id int olmadığı için == kullanıldı
    if (user) {
        res.send(user)
    } else{
        res.status(400).send('Kullanıcı yok')
    }
    
})

app.post('/user',function(req,res) {
    
    res.status(201)
    res.json(req.body)
    //res.send('Kullanıcı oluşturuldu')
    //res.send('<div class="ma-3">some html</div>')
})

app.put('/user/:name',function(req,res) {
    let kullanici= null
    let index=null

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.query.id) {
            kullanici=users[i]
            index=i
        }
        
    }
    if (kullanici===null) {
        res.status(400).send('kullanıcı yok')
        
    }
    else if (kullanici.name==req.params.name) {
        res.send("Aynı isim")
        
    }
    else{
        users[index].name=req.params.name
        req.send(users[index])
    }
})

app.delete('/user',(req,res)=>{
    let index=null

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.query.id) {
            kullanici=users[i]
            index=i
        }
        
    }
    if (index===null) res.send('kullanıcı yok') //if tek satır gösterimi
    else {
        users.splice(index,1)
        res.send(`yeni kullanıcı sayısı: ${users.length}`)
    }
})

let userTypes=['free','moderator','admin']
app.get('/firma_kazanci',(req,res)=>{
    req.get('token')
})
app.listen(3000)