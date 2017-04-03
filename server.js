const Express = require('express');
const Hbs = require('hbs');


let app = Express(); 

app.set('view engine', "Hbs"); 
Hbs.registerPartials(__dirname + "/views/partials");

app.use(Express.static(__dirname + '/styles'));


app.get("/", (req, res)=>{
    res.render('home.hbs');
});

app.get("/about", (req, res)=>{
    res.render('about.hbs');
});

app.get("/pricing", (req, res)=>{
    res.render('pricing.hbs');
});

app.get("/happy-customers", (req, res)=>{
    res.render('happy_customers.hbs');
});

app.get("/how-it-works", (req, res)=>{
    res.render('how_it_works.hbs');
});

app.listen(process.env.Port || 3000);