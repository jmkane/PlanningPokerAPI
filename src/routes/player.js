import PlayerServices from '../services'
import { Router } from 'express';

const BasicStrategy = require('passport-http').BasicStrategy;
const router = new Router();

function PlayerRoutes (Passport) {
  Passport.use(new BasicStrategy(
    function(username, password, done) {
      PlayerServices.getPlayer(username, password).then(player => {
        console.log(player);
        if (!player) {
          return done(null, false, {message: 'Incorrect User Name'})
        }
        console.log('done', player);
        return done(null, player)
      });
    }
  ));

  router.post('/login', Passport.authenticate('basic', { session: false }),
    function(req, res) {
      res.json({ user: req.user });
      console.log(req.user);
    });

//  res.send('db home page');
//   const query = request.body;
//   console.log(query);
//   return PlayerServices.getPlayer(query)
//     .then(player => {
//       return response.json(player)
//     })
//     .catch(e => { return res.status(500).json({message: 'Error in data base',
//       error: e})})
// });

  router.put('/:player.name', (req, res) => {
    const id = req.params.id;
    const player = req.body;
    return PlayerServices.updatePlayer(id, player)
      .then(player => {
        return res.json(player);
      })
      .catch(e => {
        console.log(e);
        return res.status(500).json(e);
      });
  });

  router.post('/', (req, res) => {
    const player = req.body;
    console.log(player);
    return PlayerServices.addPlayer(player)
      .then(player => {
        return res.json(player);

      })
      .catch(e => {
        console.log(e);
        return res.status(500).json(e);
      });
  });

  return router;
}


export default PlayerRoutes;
