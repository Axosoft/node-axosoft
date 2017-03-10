# node-axosoft
A node.js client for the Axosoft API

This library is built to support v6 of the Axosoft REST API and has been tested with both axosoft.com hosted accounts and Axosoft installed on premise.  Any questions can be sent to api@axosoft.com.

[Here's](http://developer.axosoft.com/) a link to our full documentation for the Axosoft REST API.

## Installation

  Install with the node package manager [npm](http://npmjs.org):

    $ npm install --save node-axosoft

## Examples

### Create the Axosoft Connection

    var nodeAxosoft = require('node-axosoft');

    var credentials = {};
    var axosoftUrl = 'https://example.axosoft.com;

    //Populate Credentials (See Below)

    var axo = nodeAxosoft(axosoftUrl, credentials);

### Populate Credentials

  User Name and Password

    credentials.client_id = 'your client id';
    credentials.client_secret = 'your client secret';
    credentials.grant_type = 'password';
    credentials.username = 'your username';
    credentials.password = 'secret';

  Authorization Code (required for public apps or if using Windows authentication)

    credentials.client_id = 'your client id';
    credentials.client_secret = 'your client secret';
    credentials.grant_type = 'authorization_code';
    credentials.redirect_uri = 'https://exampleredirect.com';

    var authorizationUrl = nodeAxosoft(axosoftUrl, credentials).Api.getLoginUrl();

    // open browser using authorizationUrl and get code parameter from redirected Url after login

    credentials.code = 'code received from redirect';

    var axo = nodeAxosoft(axosoftUrl, credentials);

  Non-Expiring Token

    //Create Non Expiring Token by logging into Axosoft account, Clicking on Tools/System Options/Axosoft API Settings/Manage Tokens, and make non-expiring token.
    credentials.access_token = 'your non-expiring token';

    var axo = nodeAxosoft(axosoftUrl, credentials);

### Get Work Item (feature)

    //optional parameters
    var params = {columns: 'name'};

    axo.Features.get(params, function(error, response){
        console.log(response.data);
    });

### Add Work Item (feature)

    params = {};
    item = {};
    item.project = {id: 1}; //required
    item.name = 'Test Item Name';
    params.item = item;

    //create new feature
    axo.Features.add(params, function(error, response){
        console.log(response);
    });

### API Promises

  node-axosoft also offers promise versions of its API functions. To use them, just require `node-axosoft/promise` instead of `node-axosoft`.

    var nodeAxosoft = require('node-axosoft/promise');
    var axo = nodeAxosoft(axosoftUrl, credentials);

    // get items
    axo.Features.get()
      .then(function(response) {
        console.log(response);
      });

## RunKit
Test features on our [RunKit](https://runkit.com/brettgaxosoft/axosoft).  Just Clone the notebook and update the Axosoft Url and Access Token to test calls with your account.
