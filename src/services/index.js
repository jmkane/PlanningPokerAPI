import Db from './db';
const PLAYERS = 'Poker';



export default {

  updatePlayer(player, _id) {

  const copyPlayer = JSON.parse(JSON.stringify(player));

  if(copyPlayer._id){
    delete copyPlayer._id;
  }
  if(copyPlayer._id) {
    delete copyPlayer._id;
  }
  return Db.then(db => {
    const collection = db.collection(PLAYERS);
    return collection.findOneAndUpdate
    ( {copyPlayer})
  })
},

  getPlayer(name,password) {
    let query = {name: search};
    return Db.then(db => {
      return db.collection(PLAYERS)
        .find(query)
        .toArray();
    })
  },

  addPlayer(player) {
    return Db.then(db => {
      const collection = db.collection(PLAYERS);
      return collection.insertOne( JSON.parse(JSON.stringify(player)))
    })
  }
}

