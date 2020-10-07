const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const fileUpload = require('express-fileupload');
var fileupload = require("express-fileupload");


require("./database/index");
require("dotenv").config({path:process.env.NODE_ENV == 'test' ? '.env.test' : '.env'}) ;


const app = express();
app.use(cors());
app.use(express.json());
//precisa do file upload por causa das imagens 
app.use(fileupload());
app.use(routes);


// evitar problemas de segurança
app.disable('x-powered-by');


app.listen(process.env.PORT || "3000");


// app.listen("3000");

