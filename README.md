# node-axosoft
A node.js client for the Axosoft API

This library is built to support v6 of the Axosoft REST API and has been tested with both axosoft.com hosted accounts and Axosoft installed on premise.  Any questions can be sent to api@axosoft.com.

[Here's](http://developer.axosoft.com/) a link to our full documentation for the Axosoft REST API.

## Installation

  Install with the node package manager [npm](http://npmjs.org):

    $ npm install node-axosoft

## Examples

### Create the Axosoft Connection

    const nodeAxosoft = require('node-axosoft');
    var credentials = {};

    //Populate Credentials (See Below)

    var axo = new nodeAxosoft({Axosoft Url}, credentials);

    User Name and Password

    credentials.client_id = {client id};
    credentials.client_secret = {client_secret};
    credentials.grant_type = 'password';
    credentials.username = {username};
    credentials.password = {password};

    #### Authorization Code (required for public apps or if using Windows authentication) ####

    credentials.client_id = {client id};
    credentials.client_secret = {client_secret};
    credentials.grant_type = 'authorization_code';
    credentials.redirect_uri = {redirect_uri};

    var authorizationUrl = new nodeAxosoft({AxosoftUrl}, credentials).Api.getLoginUrl();

    // open browser at Url and get code from redirected Url

    credentials.code = {code received};

    var axo = new nodeAxosoft({Axosoft Url}, credentials);

    #### Non-Expiring Token ####

    //Create Non Expiring Token by logging into Axosoft account, Clicking on Tools/System Options/Axosoft API Settings/Manage Tokens, and make non-expiring token.
    credentials.access_token = {non-expiring token};

### Get Work Item (feature)

    //optional parameters
    params = {};
    var params = {columns: 'name'};

    axo.Features.get(params, function(error, item){
        console.log(item);
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
