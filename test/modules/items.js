var _ = require('lodash');
var test = require('tape');
var config = require('../../config');
var node_axosoft = require('../../lib/node-axosoft')(config.base_uri, config.credentials);

test('Items test', function (assert) {
	assert.plan(6);

	assert.doesNotEqual(typeof node_axosoft.Items, 'undefined', "Items is undefined within the module's router");

	node_axosoft.Items.get({
		'page_size': 1,
		'page': 1
	}, function (err, Items) {
		assert.equals(err, null, 'Items.get should not return an error');
		if (err) {
			return;
		}
		else {
			assert.doesNotEqual(typeof Items.data, 'undefined', 'Items must contain the "data" property');
			assert.doesNotEqual(typeof Items.metadata, 'undefined', 'Items must contain the "metadata" property');
			assert.true(_.isArray(Items.data), 'Items data must be an array');
			assert.doesNotEqual(typeof Items.data[0].id, 'undefined', 'Items must contain the "metadata" property');
		}
	});
});
