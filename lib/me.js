var api = require('./api');

var Me = {

		/**
		 * Retrieves the current user
		 * 
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_me: function (callback) {
			api.handleRestRequest('get', '/me', null, callback);
		}

};

module.exports = Me;
