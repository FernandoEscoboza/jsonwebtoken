
// JsonWebToken
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const conn = require('./connection');

// Configuracion de servidor
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

// Configuracion de rutas
app.get('/api', (req, res) =>{
    conn.query('select * from user', (err, result )=>{
        if(!err){
            res.json({
                result: result
            });
        } else{
            console.log(err);
        }
    });
})

app.post('/api/login', (req, res) => {
    const {user,  password } = req.body;
    conn.query('select * from user where user=? and password=?',[user, password], (err, rows, fields) => {
        if(!err){
            console.log(rows);
            let data = JSON.stringify(rows[0]);
            const token = jwt.sign(data, 'my_secret');
            res.json({
                token:token
                // rows: rows
            })
        }else{
            console.log(err);
        }
    }); 
   
});

app.get('/api/protected', ensureToken, (req, res) =>{    
    // console.log(req.data);    
    res.json({
        text: 'protected'
    });
});

function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        console.log(bearerHeader);
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1]; 
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(3000, () => {
    console.log('Server on port 3000');
});
