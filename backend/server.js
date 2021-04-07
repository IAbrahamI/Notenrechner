const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true  });

mongoose.connection.once('open', ()=> {
    console.log("MongoDb database connection established successfully");
})

const gradesRouter = require('./routes/grades');
const usersRouter = require('./routes/users');

app.use('/grades', gradesRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is runnig on port: ${port}`);
})