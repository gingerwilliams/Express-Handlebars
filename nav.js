//use json reference numbrers to determine and build links with appropriate urls


// original state
//all links are collapsed
//all links font-family: roboto-light; 
//all arrows are >
//url is location.origin

// state onclick
//current link font-family: roboto-bold;
//adjascent links font-family: roboto-light;
//url defined in the route ***
//click the arrow for dropdown 
//arrows changes from > to v

// subnav open state
//when dropdown arrow is clicked 
//subnav opens
//adjascent subnavs collapse
//adjascent links font-family: roboto-light;

// subnav on click
// current link font-family: roboto-bold;
// all parent links font-family: roboto-bold;
// adjascent links font-family: roboto-light;
// adjascent subnav collapse

//if subnav has subnav 
//when dropdown arrow is clicked
// all parent links font-family: roboto-bold;

// var express = require('express');
// var exphbs = require('express-handlebars');
// const dataFile = require('./data/data.json');
// console.log('nav');

// var hbs = exphbs.create({
//     // Specify helpers which are only registered on this instance.
//     helpers: {
//         list: function (context, options) {
//             var ret = "<ul>";
//             for (var i = 0, j = context.length; i < j; i++) {
//                 ret = ret + "<li>" + options.fn(context[i]) + "</li>";
//             }
//             return ret + "</ul>";
//         }
//     }
// });





