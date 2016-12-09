import Express from 'express';
import bodyParser from 'body-parser';
import Passport from 'passport';
import Cors from 'cors';
import PlayerRoutes  from './routes/player';
import { Strategy } from 'passport-local';
const app = Express();




app.use(bodyParser.json());
app.use(Cors());
app.use('/', PlayerRoutes);

app.listen(3000, function(){
  console.log('App has started');
});

export default app;
