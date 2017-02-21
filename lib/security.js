var api = require('./api');
var utilities = require('./utilities');

var Security = {

		/**
		 * Returns a list of permissions
		 *
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getGlobal: function (callback) {
			api.handleRestRequest('get', '/security/permissions/global' , null, callback);
		},

		/**
		 * Returns a list of permissions
		 *
		 * @param		integer		project_id		ID of desired project
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getProject: function (project_id ,callback) {
			api.handleRestRequest('get', '/security/permissions/project/' + project_id, null, callback);
		},
};

module.exports = Security;
