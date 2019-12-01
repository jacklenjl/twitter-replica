var express = require('express');
var router = express.Router();
const Database = require('../database/database')
const User =  require("../database/model/user")
// const connection = new Database;
/* GET home page. */
function onSuccess(event)
{
  console.log('onSuccess:',event)
  return event
}

function onError(event)
{
  console.log('onError:',event)
}


router.get('/', function(req, res, next) {
  let userObj = new User();
  userObj.id = 2
  userObj.name = 'champa'

  console.log(__dirname)

  console.log('Database:',Database.then(async(con)=>{console.log(
   await con.manager.save(userObj).then(onSuccess,onError)
    )}))


res.render('index', { title: 'Twitter Replica' });
});


router.post('/twit',(req,res,next)=>{

  console.log(req.body.exampleInputEmail1)
  if(req.body.exampleInputEmail1)
  {
    let userObj = new User()
    userObj.id = 3
    userObj.name=req.body.exampleInputEmail1
    Database.then(async(con)=>{
      twit = await con.getRepository(User).createQueryBuilder("user").getMany() // .then(onSuccess,onError)
      console.log("ttt",twit)
      res.render('index',{ title: 'Twitter Replica', twitposts: twit})

      })
    // console.log('Database:',Database.then(async(con)=>{console.log(
    //   await con.manager.save(userObj).then(onSuccess,onError)
    //    )}))
    
  }
  else
  res.end('sorry no posts for you')
  
})


module.exports = router;
