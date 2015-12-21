var api = require('./api');

var Releases = {

		/**
		 * Retrieves one/multiple releases
		 *
		 * @param		integer		release_id			Optional ID of specific release
		 * @param		object		filters				Optional filters if not getting by ID
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				release_id = (args[0]) ? '/' + args[0] : '',
				filters = args[1] || null;

			api.handleRestRequest('get', '/releases' + release_id , filters, callback);
		},


		/**
		 * Add a new release
		 *
		 * @param		object		release_data		Data for a new release
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		add: function (release_data, callback) {
			api.handleRestRequest('postJson', '/releases', release_data, callback);
		},


		/**
		 * Update an existing release
		 *
		 * @param		integer		release_id			ID of specific release
		 * @param		object		release_data		New data for an existing release
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		update: function (release_id, release_data, callback) {
			api.handleRestRequest('postJson', '/releases/' + release_id + '', release_data, callback);
		},


		/**
		 * {Custom comment here}
		 *
		 * @param		integer		release_id			ID of specific release
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		delete: function (release_id, callback) {
			api.handleRestRequest('delete', '/releases/' + release_id + '', null, callback);
		}

};

module.exports = Releases;
