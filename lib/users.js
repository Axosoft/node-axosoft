var api = require('./api');

var Users = {

		/**
		 * Retrieves a single user/list of users
		 *
		 * @param		integer		user_id			ID of a single user
		 * @param		object		filters			Filters for a list of users
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				user_id = (args[0]) ? '/' + args[0] : '',
				filters = args[1] || null;

			api.handleRestRequest('get', '/users/' + user_id, filters, callback);
		},


		/**
		 * Adds a user
		 *
		 * @param		object		user_data		New user data
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		add: function (user_data, callback) {
			api.handleRestRequest('postJson', '/users', user_data, callback);
		},


		/**
		 * Updates a user
		 *
		 * @param		integer		user_id			ID of required user
		 * @param		object		user_data		New user data
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		update: function (user_id, user_data, callback) {
			api.handleRestRequest('postJson', '/users/' + user_id + '', user_data, callback);
		},


		/**
		 * Deletes a user
		 *
		 * @param		integer		user_id			ID of required user
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (user_id, callback) {
			api.handleRestRequest('delete', '/users/' + user_id + '', null, callback);
		}

};

module.exports = Users;
