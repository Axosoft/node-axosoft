var api = require('./api');

var Users = {

		/**
		 * Retrieves a list of users
		 * 
		 * @param		object		user_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_users: function (user_query, callback) {
			api.handleRestRequest('get', '/users', user_query, callback);
		},


		/**
		 * Retrieves a user
		 * 
		 * @param		integer		user_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_users: function (user_id, callback) {
			api.handleRestRequest('get', '/users/' + user_id + '', null, callback);
		},


		/**
		 * Adds a user
		 * 
		 * @param		object		user_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_users: function (user_data, callback) {
			api.handleRestRequest('postJson', '/users', user_data, callback);
		},


		/**
		 * Updates a user
		 * 
		 * @param		integer		user_id		[Description]
		 * @param		object		user_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_users: function (user_id, user_data, callback) {
			api.handleRestRequest('postJson', '/users/' + user_id + '', user_data, callback);
		},


		/**
		 * Deletes a user
		 * 
		 * @param		integer		user_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_users: function (user_id, callback) {
			api.handleRestRequest('delete', '/users/' + user_id + '', null, callback);
		}

};

module.exports = Users;
