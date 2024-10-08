/////-----------Database Connection------------------------//////
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/notesapdgfagggp"); /*useUnifiedTopology:true { useNewUrlParser: true,}*/
const hostname = "127.0.0.1";

///--------------------------------------------------------///

const express =require('express');
var cors=require('cors');

const app=express();
const port=5000;

app.use(cors());
app.use(express.json());


//Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})