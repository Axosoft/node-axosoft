var api = require('./api');

var Contacts = {

		/**
		 * Retrieves a list of contacts
		 *
		 * @param		integer		contact_id		ID of desired contact
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				contact_id = (args[0]) ? '/' + args[0] : '',
				filters = args[1] || null;

			api.handleRestRequest('get', '/contacts' + contact_id, null, callback);
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
			api.handleRestRequest('delete', '/contacts/' + contact_id + '', null, callback);
		}

};

module.exports = Contacts;
