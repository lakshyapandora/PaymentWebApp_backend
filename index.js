const express = require("express");
const cors = require('cors');
const rootRouter = require('./routes/index');

const {connectDb} = require("./db");

const app = express();


app.use(cors());
app.use(express.json());

connectDb();
app.get('/',(req,res)=>res.send("Hello"));
app.use('/api/v1',rootRouter);

app.listen(3000,()=>console.log('Server is listening on 3000 port number'));


