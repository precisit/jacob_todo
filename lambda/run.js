var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var index = require('./index');

var context = {
	done: function(err, data) {
		if (err) {
		    console.log(err, err.stack);
		} else {
		    console.log(data);
		}
	},
	fail: function(message) {
		console.error(message);
	}
};

//index.getNonsense({}, context);

index.postNonsense({name: "Sven", car: "Volvo", color: "Yellow"}, context);
