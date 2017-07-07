'use strict';

//require('greenlock-express')
require('greenlock-express').create({

  server: 'https://acme-staging.api.letsencrypt.org/directory'

, email: 'brianc@palaver.net'

, agreeTos: true

, approvedDomains: [ 'white-county-history.org', 'www.white-county-history.org' ],

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

, debug: true

}).listen(80, 443);

