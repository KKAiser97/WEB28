const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    books:[{bookId:String}]
});

const UserModel=mongoose.model('User',UserSchema);

const find=async function(query){
    return await UserModel.find(query);
}

const findByID=async function(id){
    return await UserModel.findById(id);
}

const create=async function(data){
    const newDocument= new UserModel(data);
    return await newDocument.save();
}

const update=async function(id, data){
    return await UserModel.findByIdAndUpdate(id, {$set:data}, {new: true});
}

const deleteByID=async function(id){
    return await UserModel.findByIdAndDelete(id);
}

module.exports={
    find:find,
    findByID:findByID,
    create:create,
    update:update,
    delete:deleteByID
}