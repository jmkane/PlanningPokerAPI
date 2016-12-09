import PlayerServices from '../services';
import { Router } from 'express';
import Passport from 'passport';
import {localStrategy} from 'passport-local';

const router = new Router();

passport.use(new LocalStrategy(
  function(name, password, done) {
    Player.findOne({ name: name }, function (err, player) {
      if (err) { return done(err); }
      if (!player) {
        return done(null, false, { message: 'Incorrect name.' });
      }
      if (!player.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, player);
    });
  }
));

router.get('/login', (request, response, next) =>{
  passport.authenticate('local', function(err, player, info) {
    if (err) { return next(err); }
    if (!player) { return res.redirect('/login'); }
    req.logIn(player.name, function(err) {
      if (err) { return next(err); }
      return res.redirect('/players/' + player.name);
    });
  })(req, res, next);
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

export default router;
