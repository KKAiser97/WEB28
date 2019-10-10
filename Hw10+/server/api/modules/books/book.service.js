const repository=require('./book.repository.js')

const find=async function(query){
    // validate query
    // logic
    const data=await repository.find(query);
    const count=await repository.count(query);
    return {
        data:data,
        count:count
    };
}
const findByID=async function(id){
    return await repository.findByID(id);
}
const create=async function(data){
    if(!data.title||!data.category||!data.author){
        throw new Error("Missing input!");
    }
    return await repository.create(data);
}
const update=async function(id, data){
    // validate
    const existedRecord=await repository.findByID(id);
    if(!existedRecord){
        throw new Error("Entity not found!");
    }
    return await repository.update(id, data);
}
const deleteByID= async function(id){
    // validate
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