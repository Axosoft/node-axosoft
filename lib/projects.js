var api = require('./api');
var utilities = require('./utilities');

var Projects = {
	/**
	 * Retrieves one or all project(s)
	 *
	 * @param		integer		project_id		Optional ID of single project
	 * @param		object		options			Filtering and flag options to retrieve projects
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	get: function () {
		var params = utilities.processArgs(arguments);

		api.handleRestRequest('get', '/projects' + params.id, params.options, params.callback);
	},


	/**
	 * Retrieves a list of attachments of a project
	 *
	 * @param		integer		project_id		ID of single project
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	getAttachments: function (project_id, callback) {
		api.handleRestRequest('get', '/projects/' + project_id + '/attachments', null, callback);
	},


	/**
	 * Retrieves a list of workflows associated with a project
	 *
	 * @param		integer		project_id		ID of single project
	 * @param		object		filters			Optional filters for the workflows
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	getWorkflow: function () {
		var args = Array.prototype.slice.apply(arguments),
			callback = args.slice(-1).pop() || function() { },
			project_id = args[0],
			filters = typeof args[1] === 'string' ? args[1] : null;

		api.handleRestRequest('get', '/projects/' + project_id + '/workflow', filters, callback);
	},


	/**
	 * Adds a project
	 *
	 * @param		object		project_data	Data for a new project
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	add: function (project_data, callback) {
		api.handleRestRequest('postJson', '/projects', project_data, callback);
	},


	/**
	 * Updates a project
	 *
	 * @param		integer		project_id		ID of single project
	 * @param		object		project_data	New data for an existing project
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	update: function (project_id, project_data, callback) {
		api.handleRestRequest('postJson', '/projects/' + project_id, project_data, callback);
	},


	/**
	 * Adds an attachment or attachments to the project
	 *
	 * @param		integer		project_id			ID of single project
	 * @param		object		attachment_data		New attachment data for the project
	 * @param		function	callback			Callback function
	 *
	 * @return		void
	 */
	addAttachments: function (project_id, attachment_data, callback) {
		api.handleRestRequest('postJson', '/projects/' + project_id + '/attachments', attachment_data, callback);
	},


	/**
	 * Deletes a project
	 *
	 * @param		integer		project_id		ID of single project
	 * @param 	integer   project_to_move_to		The ID of the project where all items associated with the project being deleted will be moved to
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	delete: function (project_id, project_to_move_to, callback) {
		api.handleRestRequest('del', '/projects/' + project_id, {project_to_move_to: project_to_move_to}, callback);
	}

};

module.exports = Projects;
