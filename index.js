const express=require('Express');
const port=8000;
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
//const Contact=require('./models/contact');
const router=express.Router();
const task=require('./model/task');

const db=require('./config/mongoose');
app.set('view engine' ,  'ejs' );
app.use(express.static('asset'));
app.set('views', path.join(__dirname+'/views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded());
 
 

var taskarr=[
    
   {
       name:"Do this First",
       selectitem:"Peronal"
    },
    {
        name:"Do this First",
        selectitem:"Banking"
     }
   

]
  
     
 

app.get("/*", function(httpRequest, httpResponse, next){

  //  console.log(' This latest middleware is called yar');
    next();

    });

 
 

  app.get('/', f);
    
    
     
  async function f(req, res)
{
    
    console.log(taskarr.length);
//     return  res.render('home', {

//         title:"Todo List Application",
//         task:taskarr,


//    });
 

 
var taskdata;
 await task.find({ },   function(err, taskdata1)
{


    taskdata =taskdata1;
    return  res.render('home' ,{

      title:"Task App",
      task:taskdata,
  
  });
  

});

console.log("we are moving toward the return" +taskdata);

//   return  await res.render('home' ,{

//     title:"Task App",
//     task:taskdata,

// });

    //  function(err,taskdata)
// {
              
//     if(err)
//     {
//         console.log("Cannot find contact "+err);
//         return;

//     }
    
       
// return res.render('home' ,{

//      title:"Task App",
//      task:taskdata,
// });

// });

 
}


 


 
 
 
 
 app.listen(port, function()
 {

    console.log("Server is Connected , sucessfully");
    app.post('/', function(req,res)
    {

        //console.log("server is connected , sucessfully");

     //   console.log(req.body);

        if(req.body.del=="DELETE TASK")
        {
             
            
             //return res.send("cannot create delete button");
             let id=req.body.SelectedValues;

               console.log(req.body);
              task.findByIdAndRemove(id, function(err){
     
                if(err)
                {
                    
                    console.log("cannot get or delted "+id);
                    return;
            
                }
               
                
            
              });
                   console.log("Task Deleted"+id);
               
                   return res.redirect('/');
              
                
                      
            
     


        }
      
        
       // taskarr.push({name:req.body.des, selectitem:req.body.selectitem});
         
           console.log(req.body.date);
          task.create({
             
            des:req.body.des,
            task:req.body.selectitem,
            date:req.body.date,



          }, function(err, newtask){


            if(err)
            {
                console.log("Error in creating task");
               return res.send("error in creating task in database");

            }
            console.log("Task Created"+newtask);

            return res.redirect('/');

          });
        
 

        // return  res.render('home', {

        //      title:"Todo List Application",
        //      task:taskarr,
    
    
        // });
 
    });

 });


 