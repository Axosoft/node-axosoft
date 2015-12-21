var api = require('./api');

var Items = {

		/**
		 * Returns a list of items
		 * 
		 * @param		object		item_query		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_items: function (item_query, callback) {
			api.handleRestRequest('get', '/items', item_query, callback);
		}

};

module.exports = Items;
