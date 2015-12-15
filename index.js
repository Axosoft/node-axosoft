var _ = require('lodash');
var rest = require('restler');

var ls_base_url = 'https://footworksolutions.axosoft.com/';

var credentials = {
	grant_type: 'password',
	username: 'api',
	password: 'bridgehouse123',
	client_id: '9ad13c32-187f-4b53-a45e-218ebcbf309d',
	client_secret: 'XL6vs6424I_1kLrGoMbB5RD00PTgNf5AvOAqSBNHDwSUhD61qkMxrDDjAC-bdT-3yiB9-vyr0u8CinB3WsbfLFaKsm9PtGqBHfrZ'
};

var required_credentials = ['grant_type','username','password','client_id','client_secret'];

//OAuth to get our Podio access token
rest.get(ls_base_url + 'api/oauth2/token', {data: credentials}).on('complete', function (data, response) {
		console.log(data);
	if (data.access_token){

		rest.get(ls_base_url + 'api/v5/work_logs', {
			data: {
				page:1,
				page_size: 10,
				start_date: '2015-12-10',
				end_date: '2015-12-15'
			},
			headers: {'Authorization': 'Bearer ' + data.access_token}
		}).on('complete', function (data, response) {
			console.log(data);
		});
		// (Re)set current access details
	}
	else {

		// Return an informative error object
		// callback({statusCode: response.statusCode, responseRaw: response.rawEncoded});
	}
});

function _test_required_credentials () {

}


function NodeAxosoft (credentials) {
	var node_axosoft = {
		VERSION: '1.0.0'
	};


	if (!_.has(credentials, 'app_id')) {
		throw new Error('You must specify an app_id');
	}
	if (!_.has(credentials, 'app_token')) {
		throw new Error('You must specify an app_token');
	}
	if (!_.has(credentials, 'client_id')) {
		throw new Error('You must specify a client_id');
	}
	if (!_.has(credentials, 'client_secret')) {
		throw new Error('You must specify a client_secret');
	}
	if (!_.has(credentials, 'client_secret')) {
		throw new Error('You must specify a client_secret');
	}
}