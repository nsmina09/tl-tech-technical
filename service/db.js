const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tl-techno');
const User= mongoose.model('User',{
   jobtitle:String,
   contactNumber:Number,
   skills:[],
   experience:String,
   description:String,
   portfolioImages:[],
   rate:Number 
});
const Jobs= mongoose.model('Jobs',{
    id:Number,
    jobtitle:String,
    location:String,
    description:String,
    name:String,
    contactNumber:Number,
    profileImage:String,
    rate:Number ,
    negotiation:[]
 });
module.exports={
    User
}