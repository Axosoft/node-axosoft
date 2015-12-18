var _ = require('lodash');
var rest = require('restler');

var required_credentials = ['username','password','client_id','client_secret'];


function NodeAxosoft (base_url, credentials) {
	var node_axosoft = {
		VERSION: '1.0.0'
	};

	var _axosoft_api_version = 'v5';

	var _axosoft_api_base_url = base_url + '/api/' + _axosoft_api_version;

	var _access_token;

	function _test_required_credentials () {
		_.each(required_credentials, function (credentialName) {
			if (!_.has(credentials, credentialName)) {
				console.log(credentials);
				throw new Error('You must specify "' + credentialName + '" within your credentials');
			}
		});
	}

	_test_required_credentials();


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
					.on('complete', onRestComplete.bind(undefined, callback));
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
	function onRestComplete (callback, data, response) {
		// If everything's ok
		if(response.statusCode === 200){
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
		credentials.grant_type = 'password';

		if (!_access_token) {
			// OAuth to get an Axosoft access token
			rest.get(base_url + '/api/oauth2/token', {
				data: credentials
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
	}

	/**
	 * Return all work logs matching the provider filters
	 *
	 * @param	object		filters		Filters that are passed to the work logs route
	 * @param	function	callback	Run on completion
	 *
	 * @return	void
	 */
	node_axosoft.getWorkLogs = function (filters, callback) {
		handleRestRequest('get', '/work_logs', filters, callback);
	};

	return node_axosoft;
}

// Finally, export `NodeAxosoft` to the world.
module.exports = NodeAxosoft;
