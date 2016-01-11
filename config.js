var config = {};

config.base_url = process.env.AXOSOFT_URL || 'no.url.found';

config.credentials = {};
config.credentials.url = process.env.AXOSOFT_URL || 'Axosoft URL not found';
config.credentials.username = process.env.AXOSOFT_USERNAME || 'Axosoft Username not found';
config.credentials.password = process.env.AXOSOFT_PASSWORD || 'Axosoft Password not found';
config.credentials.client_id = process.env.AXOSOFT_CLIENT_ID || 'Axosoft Client ID not found';
config.credentials.client_secret = process.env.AXOSOFT_CLIENT_SECRET || 'Axosoft Client Secret not found';

module.exports = config;