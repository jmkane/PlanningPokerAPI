import Db from './db';
const MongoDB = require('mongodb');
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
      return Db.then(db => {
      let query = {name: name, password: password};
      console.log(query);
      return db.collection(PLAYERS)
        .findOne(query)
        .toArray();
    } )
  },

  addPlayer(player) {
    const copyPlayer = JSON.parse(JSON.stringify(player));
    return Db.then(db => {
      const collection = db.collection(PLAYERS);
      return collection.insertOne( {copyPlayer})
    })
  }
}

