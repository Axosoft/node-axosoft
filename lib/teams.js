var api = require('./api');

var Teams = {

		/**
		 * Retrieves a list of teams
		 * 
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_teams: function (callback) {
			api.handleRestRequest('get', '/teams', null, callback);
		},


		/**
		 * Retrieves a team
		 * 
		 * @param		integer		team_id		[Description]
		 * @param		function		callback		[Description]
		 *
		 * @return		void
		 */
		__get_teams: function (team_id, callback) {
			api.handleRestRequest('get', '/teams/' + team_id + '', null, callback);
		}

};

module.exports = Teams;
