var api = require('./api');

var Settings = {

	/**
	 * Returns system options related to item types (describing whether they are enabled and giving their configured labels).
	 *
	 * @param		function		callback		Callback function
	 *
	 * @return		void
	 */
	getSystemOptions: function (callback) {
		api.handleRestRequest('get', '/settings/system_options', null, callback);
	}
};

module.exports = Settings;
