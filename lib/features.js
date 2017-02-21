var api = require('./api');
var utilities = require('./utilities');

var Features = {

		/**
		 * Returns a list of items
		 *
		 * @param		integer		feature_id		ID of desired feature
		 * @param		object		options			Filtering and flag options to retrieve features
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
			api.handleRestRequest('get', '/features' + feature_id + '/attachments', null, callback);
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
		 * Adds  an item
		 *
		 * @param		object		feature_data		Data for new feature
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		add: function (feature_data, callback) {
			api.handleRestRequest('postJson', '/features/', feature_data, callback);
		},


		/**
		 * Updates an item
		 *
		 * @param		integer		feature_id			ID of desired feature
		 * @param		object		feature_data		New data for feature
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		update: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '', feature_data, callback);
		},


		/**
		 * Adds one or more attachments to an item
		 *
		 * @param		integer		feature_id			ID of desired feature
		 * @param		object		feature_data		New attachment data
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addAttachments: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '/attachments', feature_data, callback);
		},


		/**
		 * Adds a change notification for the item
		 *
		 * @param		integer		feature_id			ID of desired feature
		 * @param		object		feature_data		New notification data
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addNotifications: function (feature_id, feature_data, callback) {
			api.handleRestRequest('postJson', '/features/' + feature_id + '/notifications', feature_data, callback);
		},


		/**
		 * Delete a single feature
		 *
		 * @param		integer		feature_id			ID of desired feature
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		delete: function (feature_id, callback) {
			api.handleRestRequest('del', '/features/' + feature_id + '', null, callback);
		}

};

module.exports = Features;
