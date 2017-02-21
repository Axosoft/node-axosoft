var api = require('./api');
var utilities = require('./utilities');

var Tasks = {

		/**
		 * Returns a list of items
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		object		options			Filtering and flag options to retrieve contacts
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/tasks' + params.id, params.options, params.callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getAttachments: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of comments for an item.
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getComments: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/comments', null, callback);
		},

		/**
		 * Retrieves a list of email messages for an item.
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getEmails: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/emails', null, callback);
		},

		/**
		 * Retrieves a list of fields on the view template
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getTemplateView: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/template/view', null, callback);
		},

		/**
		 * Retrieves a list of available workflow steps
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getWorkflowSteps: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/workflow_steps', null, callback);
		},

		/**
		 * Adds an item
		 *
		 * @param		object		task_data		Data for new task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		add: function (task_data, callback) {
			api.handleRestRequest('postJson', '/tasks', task_data, callback);
		},


		/**
		 * Updates an item
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		object		task_data		Updated data for task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id, task_data, callback);
		},

		/**
		 * Updates a workflow step
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		object		task_data		Updated data for task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		updateWorkflowStep: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '/workflow_steps', task_data, callback);
		},

		/**
		 * Adds one or more attachments to an item
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		object		task_data		Data for new attachment(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addAttachments: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '/attachments', task_data, callback);
		},

		/**
		 * Adds one comment to an item
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		object		comment_data		Data for new comment
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addComments: function (task_id, comment_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '/comments', comment_data, callback);
		},

		/**
		 * Adds a change notification for the item
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		object		task_data		Data for new notificiation(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addNotifications: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '/notifications', task_data, callback);
		},


		/**
		 * Delete a task
		 *
		 * @param		integer		task_id		ID of desired task
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (task_id, callback) {
			api.handleRestRequest('del', '/tasks/' + task_id + '', null, callback);
		}

};

module.exports = Tasks;
