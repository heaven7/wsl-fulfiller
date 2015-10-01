// loading the npm module
ElasticSearch = Npm.require('elasticsearch');

// create the client
EsClientSource = new ElasticSearch.Client({

    host: Meteor.settings.elasticsearch.host
});

// make it fiber aware
// api docs: http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
EsClient = Async.wrap(EsClientSource, ['index', 'search']);