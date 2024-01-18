//To see how the final website should work, run "node solution.js".

// steps:- 1. First in terminal install the npm using npm i 
// 2. import express , body-parser ,  nodemon  ,  package json have type module  
// 3. import expreess and intiliaze app =express();
// 4. using function for password and  using get & post method here.

import  express  from "express"; 
import bodyParser from "body-parser";
import { dirname } from "path";     
import { fileURLToPath } from "url";   

const __dirname = dirname(fileURLToPath(import.meta.url));   

const app = express();
const port = 3000;   
var  userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true}));

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "Yash bhardwaj") 
    {
      userIsAuthorised = true;
    }
    next();
  }
  app.use(passwordCheck);


app.get("/",(req, res)=>{
   res.sendFile(__dirname + "/public/index.html");
});

app.post("/check" ,(req,res)=>{
    if(userIsAuthorised) {
 res.sendFile(__dirname + "/public/secret.html");
    } else{
        res.sendFile(__dirname + "/public/index.html");
    }

});
app.listen(port ,()=>{
 console.log(`listening on port ${port}.`);
});

//Make sure you have installed all the dependencies with "npm i".
//The password is Yash bhardwaj
