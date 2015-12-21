var api = require('./api');

var Workflows = {

		/**
		 * Retrieves a list of workflows
		 * 
		 * @param		object		workflow_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_workflows: function (workflow_query, callback) {
			api.handleRestRequest('get', '/workflows', workflow_query, callback);
		},


		/**
		 * Retrieves one workflow
		 * 
		 * @param		integer		workflow_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_workflows: function (workflow_id, callback) {
			api.handleRestRequest('get', '/workflows/' + workflow_id + '', null, callback);
		}

};

module.exports = Workflows;
