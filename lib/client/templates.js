Template.fulfiller.onCreated(() => {
    Template.instance().range = new ReactiveVar(20)
})

Template.fulfiller.onRendered(() => {
    // override of WSL.ui.searchResponse
    WSL.ui.searchResponse = (searchResponse) => {
        var response = {results : []}

        // translate API response to work with search
        $.each(searchResponse, function(index, item) {
            //console.log(item)
            var maxResults = 4

            if(index >= maxResults) return false

            response.results.push({
                title: item.display_name
            })
        })
        //console.log(response)
        return response
    }
})

Template.fulfiller.helpers({
    // todo: change url to search items and its locations
    url: () => "//nominatim.openstreetmap.org/search?adressdetails=1&format=json&q={query}",
    items: () => {
        return [
            {
                value: "offer",
                label: i18n.t("offer")
            },
            {
                value: "need",
                label: i18n.t("need")
            },
            {
                value: "wish",
                label: i18n.t("wish")
            }
        ]
    },
    range: () => Template.instance().range.get()
})

Template.fulfiller.events({
    'change #range': (e,t) => Template.instance().range.set(e.currentTarget.value)
})