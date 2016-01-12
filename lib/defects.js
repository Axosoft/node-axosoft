var api = require('./api');
var utilities = require('./utilities');

var Defects = {

		/**
		 * Returns a list of items
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		object		options			Filtering and flag options to retrieve contacts
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/defects' + params.id, params.options, params.callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getAttachments: function (defect_id, callback) {
			api.handleRestRequest('get', '/defects/' + defect_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of email messages for an item.
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getEmails: function (defect_id, callback) {
			api.handleRestRequest('get', '/defects/' + defect_id + '/emails', null, callback);
		},


		/**
		 * Adds an item
		 *
		 * @param		object		defect_data		Data for new defect
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		add: function (defect_data, callback) {
			api.handleRestRequest('postJson', '/defects', defect_data, callback);
		},


		/**
		 * Updates an item
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		object		defect_data		Updated data for defect
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (defect_id, defect_data, callback) {
			api.handleRestRequest('postJson', '/defects/' + defect_id + '', defect_data, callback);
		},


		/**
		 * Adds one or more attachments to an item
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		object		defect_data		Data for new attachment(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addAttachments: function (defect_id, defect_data, callback) {
			api.handleRestRequest('postJson', '/defects/' + defect_id + '/attachments', defect_data, callback);
		},


		/**
		 * Adds a change notification for the item
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		object		defect_data		Data for new notificiation(s)
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		addNotifications: function (defect_id, defect_data, callback) {
			api.handleRestRequest('postJson', '/defects/' + defect_id + '/notifications', defect_data, callback);
		},


		/**
		 * Delete a defect
		 *
		 * @param		integer		defect_id		ID of desired defect
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (defect_id, callback) {
			api.handleRestRequest('delete', '/defects/' + defect_id + '', null, callback);
		}

};

module.exports = Defects;
