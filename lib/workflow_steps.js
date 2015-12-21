var api = require('./api');

var WorkflowSteps = {

		/**
		 * Retrieves one workflow step
		 * 
		 * @param		integer		workflow_step_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_workflow_steps: function (workflow_step_id, callback) {
			api.handleRestRequest('get', '/workflow_steps/' + workflow_step_id + '', null, callback);
		}

};

module.exports = WorkflowSteps;
