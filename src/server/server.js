const url="mongodb+srv://Seen:APqxtOl2m9eakm8T@gymdata.4cw5q.mongodb.net/LoginData.Uspw?retryWrites=true&w=majority"
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