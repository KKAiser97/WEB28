const express=require('express');
const mongoose=require('mongoose');
const bosyParser=require('body-parser');
const gameRouter=require('.\api\modules\games\game.router.js');
const PORT=3000;

mongoose.connect("mongod://localhost:27017/web28");
const app=express();
app.use(bosyParser.json());
app.use('/api/game', gameRouter);

app.listen(PORT, function(){
    console.log(`Server is listening on ${PORT}`);   
});
