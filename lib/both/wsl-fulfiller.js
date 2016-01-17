/**
 * WSL search methods.
 * @namespace WSL.search
 * @type {Object}
 */

WSL.search = {}

/**
 * Add search index to a collection
 * More here: http://matteodem.github.io/meteor-easy-search/
 * @param collection The collection to index
 * @param fieldsArray Array The fields to index
 * @param engine String mongodb|minimongo|mongotextindex|elasticsearch
 * @return void
 * @example
 * first add index to a collection
 * WSL.search.addIndex(Items, ['title'], 'mongodb')
 * than you can search like this
 * WSL.items.search("Hello World").fetch()
 */

WSL.search.addIndex = (collection, fieldsArray, engine, config) =>
{
    const indexName = collection._name
    const c = config ? config : {}
    let e
    switch(engine.toLowerCase()) {
        case 'mongodb':
            e = new EasySearch.MongoDB(c)
            break
        case 'minimongo':
            e = new EasySearch.Minimongo(c)
            break
        case 'mongotextindex':
            e = new EasySearch.MongoTextIndex(c)
            break
        case 'elasticsearch':
            e = new EasySearch.ElasticSearch(c)
            break
    }
    WSL[indexName] = new EasySearch.Index({
        collection: collection,
        fields: fieldsArray,
        engine: e
    })
}