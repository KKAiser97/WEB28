const mongoose=require('mongoose');

const GameSchema = mongoose.Schema({
    id: String,
    users: {
      user1: {
        name: String,
        totalScore: Number
      },
      user2: {
        name: String,
        totalScore: Number
      },
      user3: {
        name: String,
        totalScore: Number
      },
      user4: {
        name: String,
        totalScore: Number
      }
    },
    scores: {
        round: Number,
        roundScore: {
          user1: Number,
          user2: Number,
          user3: Number,
          user4: Number
        }
      }
  });

const GameModel=mongoose.model('Game',GameSchema);

const find=async function(query){
    return await GameModel.find(query);
}

const findByID=async function(id){
    return await GameModel.findById(id);
}

const create=async function(data){
    const newDocument= new GameModel(data);
    return await newDocument.save();
}

const update=async function(id, data){
    return await GameModel.findByIdAndUpdate(id, {$set:data}, {new: true});
}

const deleteByID=async function(id){
    return await GameModel.findByIdAndDelete(id);
}

module.exports={
    find:find,
    findByID:findByID,
    create:create,
    update:update,
    delete:deleteByID
}