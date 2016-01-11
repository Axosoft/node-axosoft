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
		getItems: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				filters = args[0] || {page: 1, page_size: 10};

			api.handleRestRequest('get', '/items', filters, callback);
		}

};

module.exports = Items;
