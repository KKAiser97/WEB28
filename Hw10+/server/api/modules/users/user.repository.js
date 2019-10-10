const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{type:String,
        required:true},
    email:{type:String,
        require:true},
    books:[{type:mongoose.Schema.Types.ObjectId,
        ref:"Book"}]
});

const UserModel=mongoose.model('User',UserSchema);

const find=async function(query){
    const limit=Number(query.limit);
    const skip=Number(query.skip);
    delete query.limit;
    delete query.skip;
    if (query.limit&&query.skip!==undefined){
        return await UserModel.find(query).limit(limit).skip(skip).populate('books');
    }else{
        return await UserModel.find(query).populate('books');    
    }
}

const count=async function(query){
    return await UserModel.count(query);
}

const findByID=async function(id){
    return await UserModel.findById(id).populate('books');
}

const create=async function(data){
    const newDocument= new UserModel(data);
    return await newDocument.save();
}

const update=async function(id, data){
    return await UserModel.findByIdAndUpdate(id, {$set:data}, {new: true});
    // $set: update dung vao field dc chon
}

const deleteByID=async function(id){
    return await UserModel.findByIdAndDelete(id);
}

module.exports={
    find:find,
    findByID:findByID,
    create:create,
    update:update,
    delete:deleteByID,
    count:count
}