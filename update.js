var dbname = process.argv[2];
var url = "mongodb://localhost:27017/" + dbname;
var mongo = require('mongodb').MongoClient;

//console.log(dbname);

mongo.connect(url, function(err, db) {

    if (err) throw err;
    var users = db.collection('users');
    
    users.update({
      username: "tinatime"
    }, {
      $set: {
        age: 40
      }
    }, function (err){
        if (err) throw err;
        db.close()
    });
    
});

