var api = require('./api');

var Me = {

		/**
		 * Retrieves the current user
		 *
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		get: function (callback) {
			api.handleRestRequest('get', '/me', null, callback);
		}

};

module.exports = Me;
