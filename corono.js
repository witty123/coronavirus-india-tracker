const express = require('express');
const app = express();
const path = require('path');
const tweetar = require('./services/tweetar');

app.set('views',path.join(__dirname,"views"))
app.set("view engine","hbs")

app.get('/',(req,res)=>{
    const tweets = tweetar({
        q: 'coronavirus India -filter:retweets',
        count: 10,
        result_type: 'recent',
        locale: 'en'
      }).then((tweets)=>{
          res.render('index', {data:JSON.stringify(tweets)});
      })
    
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Coronovirus started on 4000!');
})