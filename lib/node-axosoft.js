function NodeAxosoft (base_url, credentials) {

	var api_handler = require('./lib/api_handler');

	api_handler.register(base_url, credentials);

	var node_axosoft = {
		VERSION: '1.0.0',
		attachments: require('./lib/attachments.js'),
		contacts: require('./lib/contacts.js'),
		customers: require('./lib/customers.js'),
		defects: require('./lib/defects.js'),
		features: require('./lib/features.js'),
		tasks: require('./lib/tasks.js'),
		incidents: require('./lib/incidents.js'),
		items: require('./lib/items.js'),
		emails: require('./lib/emails.js'),
		fields: require('./lib/fields.js'),
		item_relations: require('./lib/item_relations.js'),
		me: require('./lib/me.js'),
		picklists: require('./lib/picklists.js'),
		projects: require('./lib/projects.js'),
		releases: require('./lib/releases.js'),
		security_roles: require('./lib/security_roles.js'),
		settings: require('./lib/settings.js'),
		teams: require('./lib/teams.js'),
		users: require('./lib/users.js'),
		work_logs: require('./lib/work_logs.js'),
		workflow_steps: require('./lib/workflow_steps.js'),
		workflows: require('./lib/workflows.js')
	};


	return node_axosoft;
}

// Finally, export `NodeAxosoft` to the world.
module.exports = NodeAxosoft;
