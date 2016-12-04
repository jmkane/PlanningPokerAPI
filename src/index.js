import Express from 'express';
import bodyParser from 'body-parser';
import Cors from 'cors';
import PlayerRoutes  from './routes/player';
const app = Express();




app.use(bodyParser.json());
app.use(Cors());
app.use('/players', PlayerRoutes);


app.listen(3000, function(){
  console.log('App has started');
});

export default app;
