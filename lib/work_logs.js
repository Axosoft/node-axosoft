var api = require('./api');

var WorkLogs = {

		/**
		 * Returns a list of work logs
		 * 
		 * @param		object		work_log_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_work_logs: function (work_log_query, callback) {
			api.handleRestRequest('get', '/work_logs', work_log_query, callback);
		},


		/**
		 * Retrieves one work log
		 * 
		 * @param		integer		work_log_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_work_logs: function (work_log_id, callback) {
			api.handleRestRequest('get', '/work_logs/' + work_log_id + '', null, callback);
		},


		/**
		 * Adds a work log to an item
		 * 
		 * @param		object		work_log_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_work_logs: function (work_log_data, callback) {
			api.handleRestRequest('postJson', '/work_logs', work_log_data, callback);
		},


		/**
		 * Updates a work log
		 * 
		 * @param		integer		work_log_id		[Description]
		 * @param		object		work_log_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_work_logs: function (work_log_id, work_log_data, callback) {
			api.handleRestRequest('postJson', '/work_logs/' + work_log_id + '', work_log_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		work_log_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_work_logs: function (work_log_id, callback) {
			api.handleRestRequest('delete', '/work_logs/' + work_log_id + '', null, callback);
		}

};

module.exports = WorkLogs;
