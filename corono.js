const express = require('express');
const app = express();
const path = require('path')

app.set('views',path.join(__dirname,"views"))
app.set("view engine","hbs")

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(4000, function () {
  console.log('Coronovirus started on 4000!');
})