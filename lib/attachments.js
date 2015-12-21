var api = require('./api');

var Attachments = {

		/**
		 * Retrieves all attachments
		 *
		 * @param		integer			attachment_id		ID of desired attachment
		 * @param		object			filters				Optional filters
		 * @param		function		callback			Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				attachment_id = (args[0]) ? '/' + args[0] : '',
				filters = args[1] || null;

			api.handleRestRequest('get', '/attachments' + attachment_id, filters, callback);
		},


		/**
		 * Retrieves file data of an attachment
		 *
		 * @param		integer		attachment_id		ID of desired attachment
		 * @param		object		filters				Optional filters
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		getData: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				attachment_id = args[0],
				filters = args[1] || null;

			api.handleRestRequest('get', '/attachments/' + attachment_id + '/data', filters, callback);
		},


		/**
		 * Updates an attachment
		 *
		 * @param		integer		attachment_id		ID of desired attachment
		 * @param		object		attachment_data		Updated data
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		update: function (attachment_id, attachment_data, callback) {
			api.handleRestRequest('postJson', '/attachments/' + attachment_id + '', attachment_data, callback);
		},


		/**
		 * Deletes an attachment
		 *
		 * @param		integer		attachment_id		ID of desired attachment
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		delete: function (attachment_id, callback) {
			api.handleRestRequest('delete', '/attachments/' + attachment_id + '', null, callback);
		}

};

module.exports = Attachments;
