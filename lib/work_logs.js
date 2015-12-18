var api = require('./api');

var WorkLogs = {

		/**
		 * Returns a list of work logs
		 * 
		 * 
		 * @param		callback		function
		 *
		 * @return		void
		 */
		__get_work_logs: function (callback) {
			api.handleRestRequest('get', '/work_logs', null, callback);
		},


		/**
		 * Retrieves one work log
		 * 
		 * 
		 * @param		work_log_id		integer
		 * @param		callback		function
		 *
		 * @return		void
		 */
		__get_work_logs: function (work_log_id, callback) {
			api.handleRestRequest('get', '/work_logs/' + work_log_id + '', null, callback);
		},


		/**
		 * Adds a work log to an item
		 * 
		 * 
		 * @param		work_log_data		object
		 * @param		callback		function
		 *
		 * @return		void
		 */
		__post_work_logs: function (work_log_data, callback) {
			api.handleRestRequest('postJson', '/work_logs', work_log_data, callback);
		},


		/**
		 * Updates a work log
		 * 
		 * 
		 * @param		work_log_id		integer
		 * @param		work_log_data		object
		 * @param		callback		function
		 *
		 * @return		void
		 */
		__post_work_logs: function (work_log_id, work_log_data, callback) {
			api.handleRestRequest('postJson', '/work_logs/' + work_log_id + '', work_log_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * 
		 * @param		work_log_id		integer
		 * @param		callback		function
		 *
		 * @return		void
		 */
		__delete_work_logs: function (work_log_id, callback) {
			api.handleRestRequest('delete', '/work_logs/' + work_log_id + '', null, callback);
		}

};

module.exports = WorkLogs;
