const Express = require('express');
const Hbs = require('hbs');


let app = Express(); 

app.set('view engine', "Hbs"); 
Hbs.registerPartials(__dirname + "/views/partials");