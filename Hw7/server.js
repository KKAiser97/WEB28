const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');
var MemberModel=mongoose.model('Member',
{
    name:String,
    age:Number,
    phoneNo:String
});
function addMem(name, age, phoneNo){
    var newMem=new MemberModel({
            name:name,
            age:age,
            phoneNo:phoneNo 
        });
    newMem.save(function(err, data){
        if (err) console.log(err);
        else console.log("Member added!");
    });    
}
function getMemByName(name){
    MemberModel.find({name:name}).exec(function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}
function updateByName(name, name, age, phoneNo){
    MemberModel.findOneAndUpdate({'name':name},{$set:{'name':name, 'age':age, 'phoneNo':phoneNo}}).exec(function(err, data){
        if (err) console.log(err);
        else console.log("Member updated!");
    });
}
function deleteByName(name){
    MemberModel.deleteOne({name:name}).exec(function(err, data){
        if (err) console.log(err);
        else console.log("Member deleted!")
    })
}
// for (let i=0;i<10;i++){
//     addMem("Kai"+i, 18+i,"0345346546"+i);
// }
// getMemByName("Kai");
// updateByName("Kai0","Ken",18, "03243247342");
// deleteByName("Kai0");