var api = require('./api');
var utilities = require('./utilities');

var Features = {

		/**
		 * Returns a list of items
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		options			Filtering and flag options to retrieve contacts
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/features' + params.id, params.options, params.callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getAttachments: function (feature_id, callback) {
			api.handleRestRequest('get', '/features/' + feature_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of comments for an item.
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getComments: function (feature_id, callback) {
			api.handleRestRequest('get', '/features/' + feature_id + '/comments', null, callback);
		},

		/**
		 * Retrieves a list of email messages for an item.
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getEmails: function (feature_id, callback) {
			api.handleRestRequest('get', '/features/' + feature_id + '/emails', null, callback);
		},

		/**
		 * Retrieves a list of fields on the view template
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getTemplateView: function (feature_id, callback) {
			api.handleRestRequest('get', '/features/' + feature_id + '/template/view', null, callback);
		},

		/**
		 * Retrieves a list of available workflow steps
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getWorkflowSteps: function (feature_id, callback) {
			api.handleRestRequest('get', '/features/' + feature_id + '/workflow_steps', null, callback);
		},

		/**
		 * Adds an item
		 *
		 * @param		object		feature_data		Data for new feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		add: function (feature_data, callback) {
			api.handleRestRequest('postJson', '/features', feature_data, callback);
		},


		/**
		 * Updates an item
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		feature_data		Updated data for feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id, feature_data, callback);
		},

		/**
		 * Updates a workflow step
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		feature_data		Updated data for feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		updateWorkflowStep: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '/workflow_steps', feature_data, callback);
		},

		/**
		 * Adds one or more attachments to an item
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		feature_data		Data for new attachment(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addAttachments: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '/attachments', feature_data, callback);
		},

		/**
		 * Adds one comment to an item
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		comment_data		Data for new comment
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addComments: function (feature_id, comment_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '/comments', comment_data, callback);
		},

		/**
		 * Adds a change notification for the item
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		feature_data		Data for new notificiation(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addNotifications: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '/notifications', feature_data, callback);
		},


		/**
		 * Delete a feature
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (feature_id, callback) {
			api.handleRestRequest('del', '/features/' + feature_id + '', null, callback);
		}

};

module.exports = Features;
