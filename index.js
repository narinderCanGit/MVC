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