var api = require('./api');

var Teams = {

		/**
		 * Retrieves a team/list of teams
		 *
		 * @param		integer		team_id			ID of team to retrieve
		 * @param		function	callback		Callback function
		 *
		 * @return		void
		 */
		__get_teams: function () {
			var args = Array.prototype.slice.apply(arguments),
				callback = args.slice(-1).pop() || function() { },
				team_id = (args[0]) ? '/' + args[0] : '';

			api.handleRestRequest('get', '/teams' + team_id, null, callback);
		}

};

module.exports = Teams;