
const mysql = require('mysql');
const conn = mysql.createConnection({
    'host':'localhost',
    'database':'ayuntamiento_palmar_arriba',
    'user':'root',
    'password': '',
    'port':'3306'
}); 

conn.connect( err =>{
    if(err) {
        console.log('Error en db '+ err);
    } else{
        console.log('DB ok');
    }
});

module.exports = conn;
