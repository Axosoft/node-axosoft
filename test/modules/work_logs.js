var _ = require('lodash');
var test = require('tape');
var config = require('../../config');
var node_axosoft = require('../../lib/node-axosoft')(config.base_uri, config.credentials);

test('WorkLogs test', function (assert) {
	assert.plan(6);

	assert.doesNotEqual(typeof node_axosoft.WorkLogs, 'undefined', "WorkLogs is undefined within the module's router");

	node_axosoft.WorkLogs.get({
		'page_size': 1,
		'page': 1
	}, function (err, workLogs) {
		assert.equals(err, null, 'WorkLogs.get should not return an error');
		if (err) {
			return;
		}
		else {
			assert.doesNotEqual(typeof workLogs.data, 'undefined', 'WorkLogs must contain the "data" property');
			assert.doesNotEqual(typeof workLogs.metadata, 'undefined', 'WorkLogs must contain the "metadata" property');
			assert.true(_.isArray(workLogs.data), 'Worklogs data must be an array');
			assert.doesNotEqual(typeof workLogs.data[0].work_done, 'undefined', 'Work Log must contain the "work_done" property');

		}
	});
});
