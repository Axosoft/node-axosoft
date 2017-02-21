var api = require('./api');
var utilities = require('./utilities');

var Users = {

		/**
		 * Retrieves a single user/list of users
		 *
		 * @param		integer		user_id			ID of a single user
		 * @param		object		options			Filtering and flag options to retrieve users
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/users/' + params.id, params.options, params.callback);
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
			api.handleRestRequest('postJson', '/users/' + user_id, user_data, callback);
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
			api.handleRestRequest('del', '/users/' + user_id, null, callback);
		}

};

module.exports = Users;
