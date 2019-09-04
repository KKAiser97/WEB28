var fs=require('fs');
var argv=process.argv.slice(2);
function readFileAsync(file, callback) {
    var arrayData = data.toString().split("\r\n");
    var data=fs.readFile(file, function (err, callback) {
      if (err) return callback(err);
      callback(null, arrayData);
    });
    return arrayData;
}

function addData(arrayData){
    for (var i=0; i<keyData.length();i++){
        var tempArray= arrayData[i].split(' ');
        keyData[i]=tempArray[0];
        valueData[i]=Number(tempArray[1]);
    }
}
function outputStream(file, callback){
    var output=addData(readFileAsync(file, callback));
    for (var i=0;i<keyData.length();i++){
        for(var j=i;j<keyData.length();j++){
            if(key[i]===key[j]){
                value[i]=value[i]+value[j];
            }
        }
    }
    fs.createWriteStream(file, function (err, output){
        if (err) return callback(err);
        callback(null, output);
    }); 
    return output;     
}
if (argv&&argv.length>=2){
    var fileInput=argv[0];
    var fileOutput=argv[1];
    readFileAsync(fileInput, function (err, callback){
        if (err){
            throw new err;
        }else{
            outputStream(fileOutput, callback);
        }
    });
}else{
    console.log('Usage: node app.js INPUTFILENAME OUTPUTFILENAME');
}