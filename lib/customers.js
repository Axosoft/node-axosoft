var api = require('./api');

var Customers = {

		/**
		 * Retrieves a list of customers with contacts
		 *
		 * @param		integer		customer_id		ID of desired customer
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				customer_id = (args[0]) ? '/' + args[0] : '';

			api.handleRestRequest('get', '/customers' + customer_id, null, callback);
		},


		/**
		 * Gets the default values for a new customer.
		 *
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		getInit: function (callback) {
			api.handleRestRequest('get', '/customers/init', null, callback);
		},


		/**
		 * Adds a customer
		 *
		 * @param		object		customer_data		Data for creating the customer
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		add: function (customer_data, callback) {
			api.handleRestRequest('postJson', '/customers', customer_data, callback);
		},


		/**
		 * Updates a customer
		 *
		 * @param		integer		customer_id		ID of desired customer
		 * @param		object		customer_data	Updated customer data
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (customer_id, customer_data, callback) {
			api.handleRestRequest('postJson', '/customers/' + customer_id + '', customer_data, callback);
		},


		/**
		 * Deletes a customer
		 *
		 * @param		integer		customer_id		ID of desired customer
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (customer_id, callback) {
			api.handleRestRequest('delete', '/customers/' + customer_id + '', null, callback);
		}

};

module.exports = Customers;
