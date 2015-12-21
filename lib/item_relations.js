var api = require('./api');

var ItemRelations = {

		/**
		 * Retrieves one item relation
		 *
		 * @param		integer		item_relation_id		ID of an item relationship
		 * @param		function	callback				Callback function
		 *
		 * @return		void
		 */
		get: function (item_relation_id, callback) {
			api.handleRestRequest('get', '/item_relations/' + item_relation_id, null, callback);
		},


		/**
		 * Adds an item relation for two items
		 *
		 * @param		object		item_relation_data		Data for a new item relationship
		 * @param		function	callback				Callback function
		 *
		 * @return		void
		 */
		add: function (item_relation_data, callback) {
			api.handleRestRequest('postJson', '/item_relations', item_relation_data, callback);
		},


		/**
		 * Updates an item relation
		 *
		 * @param		integer		item_relation_id		ID of an item relationship
		 * @param		object		item_relation_data		New data for an item relationship
		 * @param		function	callback				Callback function
		 *
		 * @return		void
		 */
		update: function (item_relation_id, item_relation_data, callback) {
			api.handleRestRequest('postJson', '/item_relations/' + item_relation_id, item_relation_data, callback);
		},


		/**
		 * {Custom comment here}
		 *
		 * @param		integer		item_relation_id		ID of an item relationship
		 * @param		function	callback				Callback function
		 *
		 * @return		void
		 */
		delete: function (item_relation_id, callback) {
			api.handleRestRequest('delete', '/item_relations/' + item_relation_id, null, callback);
		}

};

module.exports = ItemRelations;
