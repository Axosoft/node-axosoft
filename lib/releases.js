var api = require('./api');

var Releases = {

		/**
		 * Retrieves all releases
		 * 
		 * @param		object		release_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_releases: function (release_query, callback) {
			api.handleRestRequest('get', '/releases', release_query, callback);
		},


		/**
		 * Retrieves one release
		 * 
		 * @param		integer		release_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_releases: function (release_id, callback) {
			api.handleRestRequest('get', '/releases/' + release_id + '', null, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		object		release_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_releases: function (release_data, callback) {
			api.handleRestRequest('postJson', '/releases', release_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		release_id		[Description]
		 * @param		object		release_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_releases: function (release_id, release_data, callback) {
			api.handleRestRequest('postJson', '/releases/' + release_id + '', release_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		release_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_releases: function (release_id, callback) {
			api.handleRestRequest('delete', '/releases/' + release_id + '', null, callback);
		}

};

module.exports = Releases;
