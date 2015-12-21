var api = require('./api');

var Workflows = {

	/**
	 * Retrieves either a single or a list of workflows
	 *
	 * @param		integer		workflow_id			ID of single workflow to retrieve
	 * @param		object		workflow_query		Filters for list of workflows to recieve
	 * @param		function	callback			Callback functions
	 *
	 * @return		void
	 */
	get: function () {
		var args = Array.prototype.slice.apply(arguments),
			callback = args.slice(-1).pop() || function() { },
			workflow_id = (args[0]) ? '/' + args[0] : '',
			filters = args[1] || null;

		api.handleRestRequest('get', '/workflows' + workflow_id, filters, callback);
	}
};

module.exports = Workflows;
