/*const url="mongodb+srv://Seen:APqxtOl2m9eakm8T@gymdata.4cw5q.mongodb.net/LoginData.Uspw?retryWrites=true&w=majority"
let mongoose=require('mongoose')
mongoose.connect(url,{newUrlParser:true,useUnifiedTopology:true});
let db=mongoose.connection;
db.on('error',console.error.bind(console,'MONGO Error:'));

let Schema=mongoose.Schema;
let userPass=new Schema(
    {
        name:{type:String,required:true,maxLength:100},
        pass:{type:String,required:true,maxLength:100},
    }
)
*/

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});