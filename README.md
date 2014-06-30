node-edmunds-api
================

Node.js client for the Edmunds public API.

Installation
===============

```
    npm install node-edmunds-api
```


Usage
================

First, include the client and instantiate with configuration

```
    var EdmundsClient = require('node-edmunds-api');
    var client = new EdmundsClient({ apiKey: 'MY-API-KEY' });
```

Then, you can call methods on the client, e.g.

```
    client.decodeVin({ vin: 'SOME-VIN-HERE' }, function(err, res) {
      console.log(res.make);
      console.log(res.model);
    });
```

You can take a peek at the unit tests for example usage and
example responses.  Go to http://developer.edmunds.com to
get your API key.

Notes
=================

The client is API V2 compatible.

License
==================

MIT, do your worst.
