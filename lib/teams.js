var api = require('./api');
var utilities = require('./utilities');

var Teams = {

		/**
		 * Retrieves a team/list of teams
		 *
		 * @param		integer		team_id			ID of team to retrieve
		 * @param		object		options			Filtering and flag options to retrieve teams
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		__get_teams: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/teams' + params.id, params.options, params.callback);
		}

};

module.exports = Teams;