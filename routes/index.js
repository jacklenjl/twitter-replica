var express = require('express');
var router = express.Router();
const Database = require('../database/database')
const User =  require("../database/model/user")
// const connection = new Database;
/* GET home page. */
router.get('/', function(req, res, next) {
  let userObj = new User();
  userObj.id = 2
  userObj.name = 'champa'

  console.log(__dirname)

  console.log('Database:',Database.then(async(con)=>{console.log(
   await con.manager.save(userObj).then(onSuccess,onError)
    )}))


res.render('index', { title: 'Express' });
});

function onSuccess(event)
{
  console.log('onSuccess',event)
  return event
}

function onError(event)
{
  console.log('onSuccess',event)
}
module.exports = router;
