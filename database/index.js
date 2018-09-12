const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fortunes');

var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'database connection error:'));
	db.once('open', function() {
  		console.log('we connected!');
});

let fortuneSchema = mongoose.Schema({
  message: String, //"name of repo"
	});

let Fortune = mongoose.model('Fortune', fortuneSchema);

let save = (fortune) => {
	//figure out how to  only add when doesnt exist and how to remove duplicates based on created at time
  	var newfortune = new Fortune(fortune);
  	newfortune.save(function (err, fortune){
  		if (err) {
  			return console.error(err);
  		}
 		});
}

let getFortune = function(callback) {
	Fortune.find().limit(1).exec(
    function (err, fortune) {
		  if (err) return console.error(err);
		  callback(fortune);	
	  }
  );
}

module.exports.save = save;
module.exports.getFortune = getFortune;