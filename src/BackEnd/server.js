const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express()

app.use(cors())

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T!to102777",
    database: "royale",

})

app.get('/', (req, res)=> {
    return res.json("Backend connected")
})

app.get('/user', (req, res)=> {
    db.getConnection((err, connection)=> {
        if (err) {
            return res.status(500).json({error: "Failed to connect to database"});
        }

        connection.query("SELECT * FROM user", (err, data) => {
            connection.release();

            if (err) {
                return res.status(500).json({error: "Query did not execute"});
                }
            return res.json(data);
            });
        });

})

app.listen(4000, ()=>{
    console.log("port is listening");
} )