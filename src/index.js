import Express from 'express';
import bodyParser from 'body-parser';
import PlayerRoutes  from './routes/player';
const app = Express();

export default app;


app.use(bodyParser.json());
app.use('/players', PlayerRoutes);


app.listen(3000, function(){
  console.log('App has started');
});

