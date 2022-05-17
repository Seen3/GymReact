const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Seen:APqxtOl2m9eakm8T@gymdata.4cw5q.mongodb.net/LoginData.Uspw?retryWrites=true&w=majority',{
  dbName:'Uspw',
  useNewUrlParser:true,
  useUnifiedTopology:true
},err=>err?console.log(err):console.log("Connected to database."));
const RegisterSchema = new mongoose.Schema({
  uname: {
      type: String,
      required: true,
  },
  pass: {
      type: String,
      required: true,
  },
  age:{
    type:String,
    required:true,
  },
});
const User = mongoose.model('users', RegisterSchema);
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  //http://loacalhost:5000
});

app.post("/register", async (req, resp) => {
  try {
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();
      if (result) {
          delete result.uname;
          resp.send(req.body);
          console.log(result);
      } else {
          console.log("User already register");
      }
  } catch (e) {
      resp.send("Something Went Wrong");
  }
});
app.listen(5000);