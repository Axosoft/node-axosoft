var api = require('./api');

var Picklists = {

		/**
		 * Retrieves one picklist item
		 *
		 * @param		string		picklist_type		Type of picklist to get
		 * @param		integer		picklist_id			ID of required picklist
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				picklist_type = args[0],
				picklist_id = parseInt(args[1]) ? '/' + args[1] :'';

			api.handleRestRequest('get', '/picklists/' + picklist_type + picklist_id + '', null, callback);
		},


		/**
		 * Adds a priority to the Priority picklist
		 *
		 * @param		object		picklist_data		Data for new priority option
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addPriority: function (picklist_data, callback) {
			api.handleRestRequest('postJson', '/picklists/priority', picklist_data, callback);
		},


		/**
		 * Adds a severity to the Severity picklist
		 *
		 * @param		object		picklist_data		Data for new Severity option
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addSeverity: function (picklist_data, callback) {
			api.handleRestRequest('postJson', '/picklists/severity', picklist_data, callback);
		},


		/**
		 * Adds a status to the Status picklist
		 *
		 * @param		object		picklist_data		Data for new Status option
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addStatus: function (picklist_data, callback) {
			api.handleRestRequest('postJson', '/picklists/status', picklist_data, callback);
		},


		/**
		 * Deletes a value from the Priority picklist
		 *
		 * @param		integer		picklist_id			ID of required picklist
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		deletePriority: function (picklist_id, callback) {
			api.handleRestRequest('del', '/picklists/priority/' + picklist_id + '', null, callback);
		},


		/**
		 * Deletes a value from the Severity picklist
		 *
		 * @param		integer		picklist_id			ID of required picklist
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		deleteSeverity: function (picklist_id, callback) {
			api.handleRestRequest('del', '/picklists/severity/' + picklist_id + '', null, callback);
		},


		/**
		 * Deletes a value from the Status picklist
		 *
		 * @param		integer		picklist_id			ID of required picklist
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		deleteStatus: function (picklist_id, callback) {
			api.handleRestRequest('del', '/picklists/status/' + picklist_id + '', null, callback);
		}

};

module.exports = Picklists;
