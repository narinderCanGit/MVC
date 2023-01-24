// const {obj,obj1}= require('./main');


// console.log(obj1);

// const http=require ('http');
// http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('<h1 style="color:red";>Home Page</h1>');
//         res.end();
//     }else if(req.url==='/about'){
//         res.write('<h1>About Page</h1>');
//         res.end();
//     }else{
//         res.write('<h1>Route not found</h1>');
//         res.end();
//     }
// }).listen(8000, function(){
//     console.log("Server is UP!!!");
// });

const express = require('express')
const app = express()
const path=require ('path');
const wiki = require ('./Router/wiki');
const birds = require ('./Router/birds');
app.set('view engine', 'ejs');

app.use('/wiki', wiki);
app.use('/birds', birds);
app.get('/*', (req,res)=>{
    res.send('<h1>Page Not Found!!</h1>');
})

// app.get('/',(req,res)=>{
//     res.send("Welcome to Express");
// });

// app.get('/about', function(req,res){
//     res.sendFile(path.join(__dirname+'/dummy.html'));
// })

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})