const mongoose=require('mongoose');


const taskSchema=new mongoose.Schema({

    des:{
        type:String,
        required:true

    },

    task:{
        type:String,
        required:true

    },

    date:{
        type:String,
        required:true
    }

});

console.log("contact.js of model is called");

var task= mongoose.model('Task', taskSchema);

module.exports=task;
