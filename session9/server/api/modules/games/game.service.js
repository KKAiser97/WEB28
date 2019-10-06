const repository=require('./game.repository.js')

const find=async function(query){
    return await repository.find(query);
}
const findByID=async function(id){
    return await repository.findByID(id);
}
const create=async function(data){
    if(!data.id||!data.users||!data.scores){
        throw new Error("Missing input!");
    }
    return await repository.create(data);
}
const update=async function(id, data){
    const existedRecord=await repository.findByID(id);
    if(!existedRecord){
        throw new Error("Entity not found!");
    }
    return await repository.update(id, data);
}
const deleteByID= async function(id){
    const existedRecord=await repository.findByID(id);
    if(!existedRecord){
        throw new Error("Entity not found!");
    }
    return await repository.delete(id, data);
}
module.exports={
    find:find,
    findByID:findByID,
    create:create,
    update:update,
    delete:deleteByID
};