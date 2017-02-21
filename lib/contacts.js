var api = require('./api');
var utilities = require('./utilities');

var Contacts = {

		/**
		 * Retrieves a list of contacts
		 *
		 * @param		integer		contact_id		ID of desired contact
		 * @param		object		options			Filtering and flag options to retrieve contacts
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/contacts' + params.id, params.options, params.callback);
		},


		/**
		 * Gets the default values for a new contact.
		 *
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		getDefault: function (callback) {
			api.handleRestRequest('get', '/contacts/init', null, callback);
		},


		/**
		 * Adds a contact
		 *
		 * @param		object		contact_data		Data for new contact
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		add: function (contact_data, callback) {
			api.handleRestRequest('postJson', '/contacts', contact_data, callback);
		},


		/**
		 * Updates a contact
		 *
		 * @param		integer		contact_id		ID of desired contact
		 * @param		object		contact_data	Updated contact date
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (contact_id, contact_data, callback) {
			api.handleRestRequest('postJson', '/contacts/' + contact_id + '', contact_data, callback);
		},


		/**
		 * Deletes a contact
		 *
		 * @param		integer		contact_id		ID of desired contact
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (contact_id, callback) {
			api.handleRestRequest('del', '/contacts/' + contact_id + '', null, callback);
		}

};

module.exports = Contacts;
