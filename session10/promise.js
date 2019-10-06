let newPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Kien');
    },3000);
})

// Cach 1:
// newPromise.then(function(data){
//     console.log(data);
// })

let newPromis2e=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Ken');
    },3000);
})
let newPromise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Kin');
    },3000);
})
// cach 2
async function getResult(){
    let result=await newPromise;
    let result2=await newPromise2;
    let result3=await newPromise3;
    // console.log(result, result2, result3);
    let result0=await Promise.all([result, result2, result3]);
    return result0;
}
getResult();

