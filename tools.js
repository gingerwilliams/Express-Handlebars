const fs = require('fs');
const src = './src/';
const data = './data/data.json';

// let readJSONFile = (file) => {
//     fs.readFile(file, 'utf8', function (err, data) {
//         if (err) throw err;
//         console.log(data);
//     });
// }

// console.log(readJSONFile(data));





// fs.readFile('./data/data.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(data);  
// });


//async
//Read the src directory file names
// fs.readdir(src, (err, files) => {
//     if (err)
//         // return done(err)
//         console.log(err);
//     //loop through the list of file names
//     files.forEach(file => {
//         console.log(file);

//         //create a new key value pair for each name

//         //write each key value pair to the json file

//         let jsonify = '"label" :' + JSON.stringify(file);


//         fs.writeFile(data, jsonify, (err) => {
//             if (err) console.log(err);
//         })


//     });
// })

//sync
// fs.readdirSync(src, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// })


// var css = fs.readFileSync(styles, 'utf8');
// console.log('tools');

//kss --source src --json builder > kss-custom.json  --destination styleguide
//https://github.com/kss-node/kss-node/issues/365
