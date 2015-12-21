var api = require('./api');

var Projects = {

		/**
		 * Retrieves all projects
		 * 
		 * @param		object		project_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_projects: function (project_query, callback) {
			api.handleRestRequest('get', '/projects', project_query, callback);
		},


		/**
		 * Retrieves one project
		 * 
		 * @param		integer		project_id		[Description]
		 * @param		object		project_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_projects: function (project_id, project_query, callback) {
			api.handleRestRequest('get', '/projects/' + project_id + '', project_query, callback);
		},


		/**
		 * Retrieves a list of attachments of a project
		 * 
		 * @param		integer		project_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_projects/attachments: function (project_id, callback) {
			api.handleRestRequest('get', '/projects/' + project_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of workflows associated with a project
		 * 
		 * @param		integer		project_id		[Description]
		 * @param		object		project_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_projects/workflow: function (project_id, project_query, callback) {
			api.handleRestRequest('get', '/projects/' + project_id + '/workflow', project_query, callback);
		},


		/**
		 * Adds a project
		 * 
		 * @param		object		project_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_projects: function (project_data, callback) {
			api.handleRestRequest('postJson', '/projects', project_data, callback);
		},


		/**
		 * Updates a project
		 * 
		 * @param		integer		project_id		[Description]
		 * @param		object		project_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_projects: function (project_id, project_data, callback) {
			api.handleRestRequest('postJson', '/projects/' + project_id + '', project_data, callback);
		},


		/**
		 * Adds an attachment or attachments to the project
		 * 
		 * @param		integer		project_id		[Description]
		 * @param		object		project_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_projects/attachments: function (project_id, project_data, callback) {
			api.handleRestRequest('postJson', '/projects/' + project_id + '/attachments', project_data, callback);
		},


		/**
		 * Deletes a project
		 * 
		 * @param		integer		project_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_projects: function (project_id, callback) {
			api.handleRestRequest('delete', '/projects/' + project_id + '', null, callback);
		}

};

module.exports = Projects;
