var DOC = require("dynamodb-doc");

var dbClient = new DOC.DynamoDB();
var DYNAMO_NONSENSE = 'nonsense';

var uuid = require('uuid');

exports.getNonsense = function(event, context) {

	var reqObj = {
		TableName: DYNAMO_NONSENSE
	};

	dbClient.scan(reqObj, function(err, data) {
		if (err) {
			console.log(err.stack);
			context.fail('Error: Unknown internal error.');
		} else {
			context.done(null, data.Items);
		}
	});

}

exports.postNonsense = function(event, context) {

	var reqObj = {
		TableName: DYNAMO_NONSENSE,
		Item: {
			id: uuid.v4(),
			name: event.name,
			color: event.color,
			car: event.car			
		}
	}

	dbClient.putItem(reqObj, function(err, data) {
		if (err) {
			console.log(err.stack);
			context.fail('Error: Unknown internal error.')
		} else {
			context.done(null, reqObj.Item);
		}

	});

}
