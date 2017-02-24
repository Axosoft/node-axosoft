var api = require('./api');

var Filters = {

		/**
		 * Retrieves list of filters
		 *
		 * @param		string		item_type		 The type of filters to return. Either "defects", "features", "tasks", or "incidents".
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
			callback = args.slice(-1).pop() || function() { },
			item_type = args[0] ? '?item_type=' + args[0] : '';

			api.handleRestRequest('get', '/filters' + item_type, null, callback);
		}

};

module.exports = Filters;
