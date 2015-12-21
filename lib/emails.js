var api = require('./api');

var Emails = {

		/**
		 * Retrieves all email messages
		 *
		 * @param		integer		email_id		ID of required email message
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				email_id = (args[0]) ? '/' + args[0] : '';

			api.handleRestRequest('get', '/emails' + email_id + '', null, callback);
		},


		/**
		 * Retrieves a list of attachments of a email
		 *
		 * @param		integer		email_id		ID of required email message
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		getAttachments: function (email_id, callback) {
			api.handleRestRequest('get', '/emails_' + email_id + '/attachments', null, callback);
		},


		/**
		 * Adds an email message to an item and sends the email
		 *
		 * @param		object		email_data		Data for new email
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		add: function (email_data, callback) {
			api.handleRestRequest('postJson', '/emails', email_data, callback);
		},


		/**
		 * Deletes an email message
		 *
		 * @param		integer		email_id		ID of required email message
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		delete: function (email_id, callback) {
			api.handleRestRequest('delete', '/emails_' + email_id + '', null, callback);
		}

};

module.exports = Emails;
