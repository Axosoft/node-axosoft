var api = require('./api');

var Picklists = {

		/**
		 * Retrieves the picklist items
		 * 
		 * @param		mixed		picklist_type		[Description]
		 * @param		object		picklist_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_picklists/: function (picklist_type, picklist_query, callback) {
			api.handleRestRequest('get', '/picklists/' + picklist_type + '', picklist_query, callback);
		},


		/**
		 * Retrieves one picklist item
		 * 
		 * @param		mixed		picklist_type		[Description]
		 * @param		integer		picklist_id		[Description]
		 * @param		object		picklist_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_picklists/: function (picklist_type, picklist_id, picklist_query, callback) {
			api.handleRestRequest('get', '/picklists/' + picklist_type + '/' + picklist_id + '', picklist_query, callback);
		},


		/**
		 * Adds a priority to the Priority picklist
		 * 
		 * @param		object		picklist_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_picklists/priority: function (picklist_data, callback) {
			api.handleRestRequest('postJson', '/picklists/priority', picklist_data, callback);
		},


		/**
		 * Adds a severity to the Severity picklist
		 * 
		 * @param		object		picklist_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_picklists/severity: function (picklist_data, callback) {
			api.handleRestRequest('postJson', '/picklists/severity', picklist_data, callback);
		},


		/**
		 * Adds a status to the Status picklist
		 * 
		 * @param		object		picklist_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_picklists/status: function (picklist_data, callback) {
			api.handleRestRequest('postJson', '/picklists/status', picklist_data, callback);
		},


		/**
		 * Deletes a value from the Priority picklist
		 * 
		 * @param		integer		picklist_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_picklists/priority: function (picklist_id, callback) {
			api.handleRestRequest('delete', '/picklists/priority/' + picklist_id + '', null, callback);
		},


		/**
		 * Deletes a value from the Severity picklist
		 * 
		 * @param		integer		picklist_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_picklists/severity: function (picklist_id, callback) {
			api.handleRestRequest('delete', '/picklists/severity/' + picklist_id + '', null, callback);
		},


		/**
		 * Deletes a value from the Status picklist
		 * 
		 * @param		integer		picklist_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_picklists/status: function (picklist_id, callback) {
			api.handleRestRequest('delete', '/picklists/status/' + picklist_id + '', null, callback);
		}

};

module.exports = Picklists;
