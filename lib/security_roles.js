var api = require('./api');

var SecurityRoles = {

		/**
		 * Retrieves all/one security roles
		 *
		 * @param		integer		security_role_id		Optional ID of a security role
		 * @param		object		filters					Optional filters if not getting a single role by ID
		 * @param		function	callback				Callback function
		 *
		 * @return		void
		 */
		getRoles: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				security_role_id = (args[0]) ? '/' + args[0] : '',
				filters = args[1] || null;

			api.handleRestRequest('get', '/security_roles' + security_role_id, filters, callback);
		}

};

module.exports = SecurityRoles;
