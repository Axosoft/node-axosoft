var api = require('./api');

var WorkflowSteps = {

		/**
		 * Retrieves one workflow step
		 *
		 * @param		integer		workflow_step_id	ID of workflow step to retrieve
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		get: function (workflow_step_id, callback) {
			api.handleRestRequest('get', '/workflow_steps/' + workflow_step_id, null, callback);
		}

};

module.exports = WorkflowSteps;
