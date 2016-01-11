var _ = require('lodash');

function processArgs (args) {
	var params = {
		id: null,
		options: null,
		callback: function() { }
	};

	args = Array.prototype.slice.apply(args);

	params.callback = args.pop() || params.callback;

	if (args[1]) {
		params.id = '/' + args[0];
		params.options = args[1];
		return params;
	}

	if (args[0]) {
		params.id = _isID(args[0]) ? '/' + args[0] : '';
		params.options = _.isObject(args[0]) ? args[0] : null;
	}
	return params;
}

function _isID (arg) {
	return (_.isFinite(arg) || _.isNull(arg));
}

exports.processArgs = processArgs;