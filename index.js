var moment = require('moment');

var node_axosoft = require('./lib/node-axosoft')('https://footworksolutions.axosoft.com', {
	username: 'api',
	password: 'bridgehouse123',
	client_id: '9ad13c32-187f-4b53-a45e-218ebcbf309d',
	client_secret: 'XL6vs6424I_1kLrGoMbB5RD00PTgNf5AvOAqSBNHDwSUhD61qkMxrDDjAC-bdT-3yiB9-vyr0u8CinB3WsbfLFaKsm9PtGqBHfrZ'
});


node_axosoft.getWorkLogs({
	page:1,
	page_size: 1,
	start_date: moment().subtract(1, 'week').format('YYYY-MM-DD'),
	end_date:  moment().format('YYYY-MM-DD')
}, function (err, data) {
	if (err) {
		process.exit(err);
	}

	console.log(data);
});
