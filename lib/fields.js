var api = require('./api');

var Fields = {

		/**
		 * Retrieves all custom fields that match the specified parameter
		 *
		 * @param		function		callback		Callback function
		 *
		 * @return		void
		 */
		getCustom: function (callback) {
			api.handleRestRequest('get', '/fields/custom', null, callback);
		}

};

module.exports = Fields;
