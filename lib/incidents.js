var api = require('./api');

var Incidents = {

		/**
		 * Returns a list of items
		 * 
		 * @param		object		incident_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_incidents: function (incident_query, callback) {
			api.handleRestRequest('get', '/incidents', incident_query, callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_incidents/attachments: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of email messages for an item.
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_incidents/emails: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/emails', null, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		object		incident_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_incidents: function (incident_id, incident_query, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '', incident_query, callback);
		},


		/**
		 * Adds  an item
		 * 
		 * @param		object		incident_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_incidents: function (incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents', incident_data, callback);
		},


		/**
		 * Updates an item
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		object		incident_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_incidents: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '', incident_data, callback);
		},


		/**
		 * Adds one or more attachments to an item
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		object		incident_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_incidents/attachments: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/attachments', incident_data, callback);
		},


		/**
		 * Adds a change notification for the item
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		object		incident_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_incidents/notifications: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/notifications', incident_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		incident_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_incidents: function (incident_id, callback) {
			api.handleRestRequest('delete', '/incidents/' + incident_id + '', null, callback);
		}

};

module.exports = Incidents;
