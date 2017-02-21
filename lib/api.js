var _ = require('lodash');
var rest = require('restler');

var required_credentials = ['username','password','client_id','client_secret'];

var _axosoft_api_version = 'v5';
var _base_url;
var _axosoft_api_base_url;

var _access_token;

var _credentials = {};

function _register_credentials (credentials) {
	if (credentials.access_token) {
		_access_token = credentials.access_token;
	} else {
		_.each(required_credentials, function (credentialName) {
			if (!_.has(credentials, credentialName)) {
				console.log(credentials);
				throw new Error('When not providing access_token, you must specify "'
					+ credentialName + '" within your credentials');
			}
		});
	}
	_credentials = credentials;
}

function _register_base_url (base_url) {
	_base_url = base_url;
	_axosoft_api_base_url = base_url + '/api/' + _axosoft_api_version;
}

function register (base_url, credentials) {
	_register_base_url(base_url);
	_register_credentials(credentials);
}


/**
 * Wrapper for REST requests.
 * Validate credentials before making any request, then dynamically
 * generate parameters for whichever REST function is being called
 *
 * @param		string		requestType		Type of REST request
 * @param		string		requestURI		The URI for the request
 * @param		string		requestData		Any data to be passed via the request
 * @param		function	callback		Callback function
 *
 * @return		void
 */
function handleRestRequest (requestType, requestURI, requestData, callback) {
	var request_options = {},
		request_params = [null, _axosoft_api_base_url + requestURI],
		rest_function;

		//TODO  Fix this with all API calls to use 'del'
		if (requestType === 'delete') {
			requestType = 'del'
		}

	// Validate credentials
	_authenticateCredentails(function (err) {
		if (!err){

			// Add the access token to the request headers
			request_options.headers = {'Authorization': 'Bearer ' + _access_token};
			// If this is a post request, add the data as a parameter
			if ('postJson' === requestType) {
				request_params.push(requestData);
			}

			// If this is a get request and there's specified data, add that to the request options object
			if ('get' === requestType && requestData) {
				request_options.data = requestData;
			}

			// Push the request options into the parameters array
			request_params.push(request_options);

			// Create a bound function with the params array using apply
			rest_function = rest[requestType].bind.apply(rest[requestType], request_params);


			// Call the rest function and handle completion
			rest_function()
				.on('complete', _onRestComplete.bind(undefined, callback));
		}
		else {
			callback(err);
		}
	});
}

/**
 * Called on completion of a REST reqwuest, calling the callback with either
 * the data or response errors depending on the success of the request
 *
 * @param		function	callback		Callback function
 * @param		object		data			Data returned from request
 * @param		object		response		Response from request
 *
 * @return		void
 */
function _onRestComplete (callback, data, response) {
	// If everything's ok
	if(response.statusCode === 200 || response.statusCode === 201){
		callback(null, data);
	}
	else {
		// Return an informative error object
		callback({statusCode: response.statusCode, responseRaw: response.rawEncoded});
	}
}

/**
 * Authenticates the provided credentials against Axosoft's OAUTH api
 *
 * @param   function    callback        Run on completion
 *
 * @return  void
 */
function _authenticateCredentails (callback) {
	_credentials.grant_type = 'password';

	if (!_access_token) {
		// OAuth to get an Axosoft access token
		rest.get(_base_url + '/api/oauth2/token', {
			data: _credentials
		})
		.on('complete', function (data, response) {
			if (data.access_token){
				_access_token = data.access_token;
				callback(null);
			}
			else {
				// Return an informative error object
				callback({statusCode: response.statusCode, responseRaw: response.rawEncoded});
			}
		});
	}
	else {
		callback(null);
	}
}

exports.register = register;
exports.handleRestRequest = handleRestRequest;
