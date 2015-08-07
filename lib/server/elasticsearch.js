// loading the npm module
ElasticSearch = Npm.require('elasticsearch');

// create the client
EsClientSource = new ElasticSearch.Client({

    // Search.settings.host
    host: 'localhost:9201'
});

// make it fiber aware
// api docs: http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
EsClient = Async.wrap(EsClientSource, ['index', 'search']);