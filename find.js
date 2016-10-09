var url = "mongodb://localhost:27017/learnyoumongo";

var mongo = require('mongodb').MongoClient;

    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if (err) throw err;
      
      var par = db.collection('parrots');
      par.find({
        age: {$gt: parseInt(process.argv[2])}
      }).toArray(function(err, documents) {
        if (err) throw err;
        console.log(documents);
      });
      //console.log(par);
      
      db.close();
      
    })