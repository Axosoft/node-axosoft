var api = require('./api');

var Tasks = {

		/**
		 * Returns a list of items
		 * 
		 * @param		object		task_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_tasks: function (task_query, callback) {
			api.handleRestRequest('get', '/tasks', task_query, callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_tasks/attachments: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of email messages for an item.
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_tasks/emails: function (task_id, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '/emails', null, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		object		task_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_tasks: function (task_id, task_query, callback) {
			api.handleRestRequest('get', '/tasks/' + task_id + '', task_query, callback);
		},


		/**
		 * Adds  an item
		 * 
		 * @param		object		task_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_tasks: function (task_data, callback) {
			api.handleRestRequest('postJson', '/tasks', task_data, callback);
		},


		/**
		 * Updates an item
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		object		task_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_tasks: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '', task_data, callback);
		},


		/**
		 * Adds one or more attachments to an item
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		object		task_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_tasks/attachments: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '/attachments', task_data, callback);
		},


		/**
		 * Adds a change notification for the item
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		object		task_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_tasks/notifications: function (task_id, task_data, callback) {
			api.handleRestRequest('postJson', '/tasks/' + task_id + '/notifications', task_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		task_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_tasks: function (task_id, callback) {
			api.handleRestRequest('delete', '/tasks/' + task_id + '', null, callback);
		}

};

module.exports = Tasks;
