var api = require('./api');
var utilities = require('./utilities');

var WorkLogs = {

		/**
		 * Returns a single/a list of work logs
		 *
		 * @param		integer		work_log_id			ID of a single work log entry
		 * @param		object		options				Values by which to filter a list of work logs
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/work_logs' + params.id, params.options, params.callback);
		},


		/**
		 * Adds a work log to an item
		 *
		 * @param		object		work_log_data		New work log data
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		add: function (work_log_data, callback) {
			api.handleRestRequest('postJson', '/work_logs', work_log_data, callback);
		},


		/**
		 * Updates a work log
		 *
		 * @param		integer		work_log_id			ID of a single work log entry
		 * @param		object		work_log_data		New work log data
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		update: function (work_log_id, work_log_data, callback) {
			api.handleRestRequest('postJson', '/work_logs/' + work_log_id, work_log_data, callback);
		},


		/**
		 * Delete a work log
		 *
		 * @param		integer		work_log_id			ID of a single work log entry
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		delete: function (work_log_id, callback) {
			api.handleRestRequest('del', '/work_logs/' + work_log_id, null, callback);
		}

};

module.exports = WorkLogs;
