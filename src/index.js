import Express from 'express';
import bodyParser from 'body-parser';
import Cors from 'cors';
import Passport from 'passport';
const app = Express();

app.use(bodyParser.json());
app.use(Cors());
app.use(Passport.initialize());
app.use('/', require('./routes/player')(Passport));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(3000, function(){
  console.log('App has started');
});

export default app;
