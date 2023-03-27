//Require packages
const express = require("express");
const cors = require("cors");

//Create app instance
const app = express();

//Set up middleware
app.use(cors());
app.use(express.json());

//Endpoints
const { getFortune,postFortune,deleteFortune,getAll } = require('./controller')

app.get("/api/fortune", getFortune);
app.post('/api/fortune',postFortune);
app.delete('/api/fortune/:id',deleteFortune);
app.get('/api/fortune',getAll)


//Open port for my server
app.listen(4000, () => console.log("Server running on 4000"));
