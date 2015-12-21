var api = require('./api');

var ItemRelations = {

		/**
		 * Retrieves one item relation
		 * 
		 * @param		integer		item_relation_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_item_relations: function (item_relation_id, callback) {
			api.handleRestRequest('get', '/item_relations/' + item_relation_id + '', null, callback);
		},


		/**
		 * Adds an item relation for two items
		 * 
		 * @param		object		item_relation_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_item_relations: function (item_relation_data, callback) {
			api.handleRestRequest('postJson', '/item_relations', item_relation_data, callback);
		},


		/**
		 * Updates an item relation
		 * 
		 * @param		integer		item_relation_id		[Description]
		 * @param		object		item_relation_data		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__post_item_relations: function (item_relation_id, item_relation_data, callback) {
			api.handleRestRequest('postJson', '/item_relations/' + item_relation_id + '', item_relation_data, callback);
		},


		/**
		 * {Custom comment here}
		 * 
		 * @param		integer		item_relation_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__delete_item_relations: function (item_relation_id, callback) {
			api.handleRestRequest('delete', '/item_relations/' + item_relation_id + '', null, callback);
		}

};

module.exports = ItemRelations;
