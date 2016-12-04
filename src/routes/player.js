import PlayerServices from '../services';
import { Router } from 'express';

const router = new Router();

router.post('/login', (request, response) =>{
//  res.send('db home page');
  const query = request.body;
  console.log(query);
  return PlayerServices.getPlayer(query)
    .then(player => {
      return response.json(player)
    })
    .catch(e => { return res.status(500).json({message: 'Error in data base',
      error: e})})
});

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
