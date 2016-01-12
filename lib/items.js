var api = require('./api');

var Items = {

		/**
		 * Returns a list of items.
		 * Defaults to first 10 unfiltered items
		 *
		 * @param		object		filters			Filters to get items
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getItems: function (filters, callback) {
			api.handleRestRequest('get', '/items', filters, callback);
		}

};

module.exports = Items;
