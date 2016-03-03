//if(!Package['heaven7:wsl-core']) WSL = window && window['WSL'] ? window['WSL'] : {}

/**
 * Override response function to alter data retrieved from an API
 * see: http://semantic-ui.com/modules/search.html#server-responses
 * @param searchResponse json object
 */
WSL.search.searchResponse = (searchResponse) => {}

/*
Meteor.startup(() => {
    if (Meteor.isClient) window['WSL']['search'] = WSL.search
})
*/



