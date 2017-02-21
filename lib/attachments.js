var api = require('./api');
var utilities = require('./utilities');

var Attachments = {

	/**
	 * Retrieves all attachments
	 *
	 * @param		integer			attachment_id		ID of desired attachment
	 * @param		object			options				Optional filters and flags
	 * @param		function		callback			Callback function
	 *
	 * @return		void
	 */
	get: function () {
		var params = utilities.processArgs(arguments);

		api.handleRestRequest('get', '/attachments' + params.id, params.options, params.callback);
	},


	/**
	 * Retrieves file data of an attachment
	 *
	 * @param		integer		attachment_id		ID of desired attachment
	 * @param		object		options				Optional filters and flags
	 * @param		function	callback			Callback function
	 *
	 * @return		void
	 */
	getData: function () {
		var params = utilities.processArgs(arguments);

		api.handleRestRequest('get', '/attachments/' + params.id + '/data', params.options, params.callback);
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
		api.handleRestRequest('del', '/attachments/' + attachment_id + '', null, callback);
	}
};

module.exports = Attachments;
