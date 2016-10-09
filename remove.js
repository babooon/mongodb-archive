var dbname = process.argv[2];
var colname = process.argv[3];
var id = process.argv[4];

var url = "mongodb://localhost:27017/" + dbname;
var mongo = require('mongodb').MongoClient;


mongo.connect(url, function(err, db) {
    
    if (err) throw err;
    
    var collection = db.collection(colname);
    
    collection.remove({
      _id: id
    }, function(err){
        if (err) throw err;
        db.close();
    });
    
});