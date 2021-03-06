const Express = require('express');
const Hbs = require('hbs');


let app = Express(); 

app.set('view engine', "Hbs"); 
Hbs.registerPartials(__dirname + "/views/partials");

app.use(Express.static(__dirname + '/styles'));
app.use(Express.static(__dirname + '/images'));
app.use(Express.static(__dirname + '/scripts'));

app.get("/", (req, res)=>{
    res.render('home.hbs');
});

app.get("/about", (req, res)=>{
    res.render('about.hbs');
});

app.get("/signup", (req, res)=>{
    res.render('signup.hbs');
});

app.get("/happy-customers", (req, res)=>{
    res.render('happy_customers.hbs');
});

app.get("/how-it-works", (req, res)=>{
    res.render('how_it_works.hbs');
});

let port = process.env.PORT || 3000;

app.listen(port);