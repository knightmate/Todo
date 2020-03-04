const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Todo_App_Db');


const db=mongoose.connection;
 
db.on('error',console.error.bind(console, 'error, somethinf went wrong'));


db.once('open', function()
{

    console.log("Data Base ,SucessFully COnnected");

});
