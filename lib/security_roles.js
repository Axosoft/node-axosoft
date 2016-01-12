var api = require('./api');
var utilities = require('./utilities');

var SecurityRoles = {

	/**
	 * Retrieves all/one security roles
	 *
	 * @param		integer		security_role_id		Optional ID of a security role
	 * @param		object		options					Filtering and flag options to retrieve roles
	 * @param		function	callback				Callback function
	 *
	 * @return		void
	 */
	getRoles: function () {
		var params = utilities.processArgs(arguments);

		api.handleRestRequest('get', '/security_roles' + params.id, params.options, params.callback);
	}
};

module.exports = SecurityRoles;
