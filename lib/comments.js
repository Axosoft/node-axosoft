var api = require('./api');

var Comments = {

		/**
		 *
		 * @param		integer		comment_id		ID of the comment to delete
		 * @param		function	callback				Callback function
		 *
		 * @return		void
		 */
		delete: function (comment_id, callback) {
			api.handleRestRequest('delete', '/comments/' + comment_id, null, callback);
		}

};

module.exports = Comments;
