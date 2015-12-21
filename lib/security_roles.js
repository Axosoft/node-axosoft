var api = require('./api');

var SecurityRoles = {

		/**
		 * Retrieves all security roles
		 * 
		 * @param		object		security_role_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_security_roles: function (security_role_query, callback) {
			api.handleRestRequest('get', '/security_roles', security_role_query, callback);
		},


		/**
		 * Retrieves one security role
		 * 
		 * @param		integer		security_role_id		[Description]
		 * @param		object		security_role_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_security_roles: function (security_role_id, security_role_query, callback) {
			api.handleRestRequest('get', '/security_roles/' + security_role_id + '', security_role_query, callback);
		}

};

module.exports = SecurityRoles;
