var api = require('./api');

var Settings = {

		/**
		 * Returns system options related to item types (describing whether they are enabled and giving their configured labels).
		 * 
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_settings/system_options: function (callback) {
			api.handleRestRequest('get', '/settings/system_options', null, callback);
		}

};

module.exports = Settings;
