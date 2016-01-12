var api = require('./api');
var utilities = require('./utilities');

var Workflows = {

	/**
	 * Retrieves either a single or a list of workflows
	 *
	 * @param		integer		workflow_id			ID of single workflow to retrieve
	 * @param		object		options				Filtering and flag options to retrieve workflows
	 * @param		function	callback			Callback functions
	 *
	 * @return		void
	 */
	get: function () {
		var params = utilities.processArgs(arguments);

		api.handleRestRequest('get', '/workflows' + params.id, params.options, params.callback);
	}
};

module.exports = Workflows;
