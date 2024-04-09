const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express()
const SQL = require('sql-template-strings')

const corsOptions={
    origin: 'http://localhost:3000',
    methods: ['GET','POST'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'new_password',
    database: 'royale',
    port: '3306',
   
});

db.connect((err) => {
        if (err) {
                console.error("Failed to connect to database", err);
                return;
        }
            console.log("Connected to MySQL database");
});

app.get('/', (req, res)=> {
    return res.json("Backend connected");
});


app.get('/database', (req, res)=> {
    db.query('SELECT * FROM user', (err, data) => {
        if (err) {
                console.error('Query failed', err);
                return res.status(500).json({ error: "Query not executed"});
        }
        return res.json(data);
    });
});

app.post('/newUser', async (req, res) => {
    const { username, password } = req.body;
    console.log("New User attempted:", username,"and", password);
    
    try {
        db.query(`SELECT * FROM user WHERE username = ?`, [username], (err, user)=>{
            if(err) {
                console.error("Query error:", err);
                return res.status(500).json({message: "Database query error"});
            }
    
        if (user.length < 1) {
            console.log("Username is available")
            res.status(200).json({message: "New account successful"})
        } else {
            res.status(401).json({message: "Please pick a different user name"})
            }
        });
    } catch (error) {
            console.error("error during creation:", error);
            console.error("error:", error);
            res.status(500).json({ message: "Internal server error"})
        }
    })

app.post('/login', async (req, res)=>{
    const { username, password } = req.body;
    
    console.log("Post Login request, username:", username, "Password:", password)
    try {
        db.query(`SELECT * FROM user WHERE username = ? AND password = ?`, [username, password], (err, user) => {
            if (err) {
        console.error("error during login", err);
            return res.status(500).json({message:"Database connection error"});
        } 
         if (user.length === 1) {
            console.log(user.length);
            res.status(200).json({ message: "Login Successful" });
         } else {
            console.log("failed password:", password);
            console.log("failed for user:", username);
            res.status(401).json({ message: "Invalid username or password" });
            }
        });

    }catch (error) {
        console.error("error during login:", error);
        console.error("error:", error);
        res.status(500).json({ message: "Internal server error" })
}
});


app.listen(4000, ()=>{
    console.log("port is listening");
});
