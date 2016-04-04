var test = require('tape');
var api = require('../../lib/api');
var config = {base_uri:'', credentials:{}};

test('ENV config test', function (assert) {
	var invalidRegistration,
		validRegistration;

	invalidRegistration = api.register.bind(null, config.base_uri, config.credentials);
	assert.throws(invalidRegistration, Error, 'Registering with no credentials or url should throw an error.');

	config = require('../../config');

	assert.notEqual(config.base_uri, '', 'Base URI not set');
	assert.notEqual(config.credentials.username, 'Axosoft Username not found', 'Axosoft Username not found');
	assert.notEqual(config.credentials.password, 'Axosoft Password not found', 'Axosoft Password not found');
	assert.notEqual(config.credentials.client_id, 'Axosoft Client ID not found', 'Axosoft Client ID not found');
	assert.notEqual(config.credentials.client_secret, 'Axosoft Client Secret not found', 'Axosoft Client Secret not found');

	validRegistration = api.register.bind(null, config.base_uri, config.credentials);
	assert.doesNotThrow(validRegistration, Error, 'Registering with credentials and url should not throw an error.');

	api.handleRestRequest('get', '/me', null, function (err) {
		assert.equals(err, null, 'API request with credentials and url should not throw an error.');
	});

	assert.end();
});

