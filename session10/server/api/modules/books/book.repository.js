const mongoose=require('mongoose');

const BookSchema=mongoose.Schema({
    title:String,
    category:String,
    description:String,
    author:String
});

const BookModel=mongoose.model('Book',BookSchema);

const find=async function(query){
    return await BookModel.find(query);
}

const findByID=async function(id){
    return await BookModel.findById(id);
}

const create=async function(data){
    const newDocument= new BookModel(data);
    return await newDocument.save();
}

const update=async function(id, data){
    return await BookModel.findByIdAndUpdate(id, {$set:data}, {new: true});
}

const deleteByID=async function(id){
    return await BookModel.findByIdAndDelete(id);
}

module.exports={
    find:find,
    findByID:findByID,
    create:create,
    update:update,
    delete:deleteByID
}