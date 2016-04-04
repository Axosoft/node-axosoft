function setConfig () {
	var config = {base_uri:'', credentials:{}};

	config.base_uri = process.env.AXOSOFT_URL || 'no.url.found';

	config.credentials = {
		url: process.env.AXOSOFT_URL || 'Axosoft URL not found',
		username: process.env.AXOSOFT_USERNAME || 'Axosoft Username not found',
		password: process.env.AXOSOFT_PASSWORD || 'Axosoft Password not found',
		client_id: process.env.AXOSOFT_CLIENT_ID || 'Axosoft Client ID not found',
		client_secret: process.env.AXOSOFT_CLIENT_SECRET || 'Axosoft Client Secret not found'
	};

	return config;
}

module.exports = setConfig();