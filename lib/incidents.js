var api = require('./api');
var utilities = require('./utilities');

var Incidents = {

		/**
		 * Returns a list of items
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		object		options			Filtering and flag options to retrieve contacts
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/incidents' + params.id, params.options, params.callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getAttachments: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of comments for an item.
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getComments: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/comments', null, callback);
		},

		/**
		 * Retrieves a list of email messages for an item.
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getEmails: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/emails', null, callback);
		},

		/**
		 * Retrieves a list of fields on the view template
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getTemplateView: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/template/view', null, callback);
		},

		/**
		 * Retrieves a list of available workflow steps
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getWorkflowSteps: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/workflow_steps', null, callback);
		},

		/**
		 * Adds an item
		 *
		 * @param		object		incident_data		Data for new incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		add: function (incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents', incident_data, callback);
		},


		/**
		 * Updates an item
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		object		incident_data		Updated data for incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id, incident_data, callback);
		},

		/**
		 * Updates a workflow step
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		object		incident_data		Updated data for incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		updateWorkflowStep: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/workflow_steps', incident_data, callback);
		},

		/**
		 * Adds one or more attachments to an item
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		object		incident_data		Data for new attachment(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addAttachments: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/attachments', incident_data, callback);
		},

		/**
		 * Adds one comment to an item
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		object		comment_data		Data for new comment
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addComments: function (incident_id, comment_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/comments', comment_data, callback);
		},

		/**
		 * Adds a change notification for the item
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		object		incident_data		Data for new notificiation(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addNotifications: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/notifications', incident_data, callback);
		},


		/**
		 * Delete a incident
		 *
		 * @param		integer		incident_id		ID of desired incident
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (incident_id, callback) {
			api.handleRestRequest('del', '/incidents/' + incident_id + '', null, callback);
		}

};

module.exports = Incidents;
