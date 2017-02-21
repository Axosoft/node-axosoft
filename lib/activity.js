var api = require('./api');

var Activity = {

		/**
		 * Retrieves the most recent activities
		 *
		 * @param		object		options			Filtering and flag options to retrieve contacts
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		get: function (options, callback) {
			api.handleRestRequest('get', '/activity', options, callback);
		}

};

module.exports = Activity;
