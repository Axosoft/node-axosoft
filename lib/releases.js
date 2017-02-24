var api = require('./api');
var utilities = require('./utilities');

var Releases = {

		/**
		 * Retrieves one/multiple releases
		 *
		 * @param		integer		release_id			Optional ID of specific release
		 * @param		object		options				Filtering and flag options to retrieve releases
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/releases' + params.id, params.options, params.callback);
		},

		/**
		 * Retrieves capacity details for release
		 *
		 * @param		integer		release_id			Optional ID of specific release
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		getCapacity: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/releases' + params.id + '/capacity_details', null, params.callback);
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
			api.handleRestRequest('del', '/releases/' + release_id + '', null, callback);
		}

};

module.exports = Releases;
