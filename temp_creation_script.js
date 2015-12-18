if (!String.format) {
	String.format = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}

var $endpoints = $('li.endpoint');
var $resources = $('.resource .heading h2 a');

var _resource_functions = {};


function _get_functions () {
	$endpoints.each(function (index) {
		var $endpoint = $(this),
			operation = $endpoint.find('.http_method a').text().toUpperCase(),
			l_operation = $endpoint.find('.http_method a').text(),
			$operational_params_rows =  $endpoint.find('tbody.operational_params tr'),
			operational_params = [],
			calculated_op = ('post' === l_operation) ? 'postJson' : l_operation,
			path = $endpoint.find('.path a').text(),
			path_array = path.split('/'),
			item_original = path_array[1],
			item = path_array[1].substring(0, path_array[1].length - 1),
			desc = $endpoint.find('.options li a').text(),
			func_name = l_operation + path.replace('/{id}', '').replace('/', '_'),
			function_call = '',
			function_call_data_param = 'null',
			matches = path.match(/\{(\w+)\}/g),
			params = [],
			doc_params = '',
			func_params = '',
			ls_full_string = "\\t\\t/**\n\\t\\t * {0}\n\\t\\t * {1}\n\\t\\t *\n\\t\\t * @return\\t\\tvoid\n\\t\\t */\n\\t\\t{2}: function ({3}) {\n\\t\\t\\t{4}\n\\t\\t}";

		path_array.shift();

		desc = ('' === desc) ? '{Custom comment here}' : desc;

		$operational_params_rows.each(function () {
			var $row = $(this),
				ls_param_name = $row.children('td:nth-child(1)').text(),
				ls_param_description = $row.children('td:nth-child(3)').text();


			if ('{id}' !== ls_param_name) {
				operational_params.push(ls_param_name);
			}
		});

		if (matches) {
			if ('s' === func_name.substring(-1, 1)) {
				func_name = func_name.substring(0, func_name.length - 1);
			}

			$.each(matches, function (id, param_match) {
				func_name = func_name.replace(param_match, '');

				var ls_param_match = param_match.replace(/[\{\}]+/gi, '');

				if ('id' === ls_param_match) {
					params.push([item + '_id', 'integer']);
					path = path.replace('{id}', "' + " + item + "_id + '");
				}
				else {
					params.push([ls_param_match, 'mixed']);
					path = path.replace(param_match, "' + " + ls_param_match + " + '");
				}
			});
		}
		func_name = '__' + func_name;

		if ('get' === l_operation && operational_params.length) {
			params.push([item + '_query', 'object']);
			function_call_data_param = item + '_query';
		}

		if ('post' === l_operation) {
			params.push([item + '_data', 'object']);
			function_call_data_param = item + '_data';
		}

		params.push(['callback', 'function']);

		$.each(params, function (index, param_array) {
			doc_params = doc_params + "\n\\t\\t * @param\\t\\t" + param_array[0] + "\\t\\t" + param_array[1];
			func_params = func_params + param_array[0] + ", ";
		});

		function_call = "api.handleRestRequest('" + calculated_op + "', '" + path + "', " + function_call_data_param + ", callback);";

		func_params = func_params.substring(0, func_params.length - 2);
		if ('undefined' !== typeof _resource_functions[item_original]) {
			_resource_functions[item_original].push(String.format(ls_full_string, desc, doc_params, func_name, func_params, function_call));
		}
		else {
			console.log(_resource_functions);
			throw new Error('Resource item ' + item_original + ' missing.');
		}
	});
}

function camelize(str, isClass) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
			return (index === 0 && !isClass) ? match.toLowerCase() : match.toUpperCase();
	});
}


function _map_resources () {
	$resources.each(function (index) {
		var $resource = $(this),
			item = $resource.text().replace('/', '');

		_resource_functions[item] = [];
	});
}

function _create_files () {
	$resources.each(function (index) {
		var $resource = $(this),
			item = $resource.text().replace('/', ''),
			class_name = camelize(item.replace('_', ' '), true),
			file_name = '~/git/node-axosoft/lib/' + item + '.js',
			ls_full_string = 'echo -e "var api = require(\'./api\');\n\nvar %s = {\n\n%s\n\n};\n\nmodule.exports = %s;" > %s;',
			ls_functions = _resource_functions[item].join(",\n\n\n");



		console.log(ls_full_string, class_name, ls_functions, class_name, file_name);
	});
}

function _create_require_params () {
	$resources.each(function (index) {
		var $resource = $(this),
			item = $resource.text().replace('/', '');

		console.log("node_axosoft.%s = require('./lib/%s.js');", item, item);
	});
}

function _output_files () {
	_map_resources();
	_get_functions();
	_create_files();
}