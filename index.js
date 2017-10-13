const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const tools = require('./tools');
const nav = require('./nav');
// const jsonData = require('./data/data.json');

//const api = require('./kss');

const routes = require('./routes/routes');

const app = express();

//Handlebars Middleware
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//CSS
// app.use('/css', express.static(path.join(__dirname, 'output/css')));
app.use(express.static(path.join(__dirname, 'output')));

//JSON
//Global variables 'locals' for your app
app.locals.points = "8.715";
app.locals.dataFile = require('./data/data.json');
// console.log(dataData.customPropertyNames);


//server
app.set('port', 3000);

//views --> why is this required for routes and not the rest of the js files?
app.use('/', routes);


//server
//Server listener -- below scripts
app.listen(app.get('port'), function () {
    console.log('Server running at ' + app.get('port'));
});

