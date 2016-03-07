Template.fulfiller.onCreated(() => {
    const template = Template.instance()
    template.range = new ReactiveVar(20)
    template.searchText = new ReactiveVar()
    template.measure = new ReactiveVar()
    template.type = new ReactiveVar()
})

Template.fulfiller.onRendered(function() {
    // override of WSL.search.searchResponse
    WSL.search.searchResponse = (searchResponse) => {
        var response = {results : []}

        // translate API response to work with search
        $.each(searchResponse, function(index, item) {
            var maxResults = 4

            if(index >= maxResults) return false

            response.results.push({
                title: item.title,
                description: item.description
            })
        })
        return response
    }
})

Template.fulfiller.events({
    'keyup #searchtext': (e,t) => Template.instance().searchText.set(e.currentTarget.value),
    'change #fulfill-type': (e,t) => Template.instance().type.set(e.currentTarget.value),
    'change #range': (e,t) => Template.instance().range.set(e.currentTarget.value),
    'change #measure': (e,t) => Template.instance().measure.set(e.currentTarget.value)
})

Template.fulfiller.helpers({
    // todo: change url to search items and its locations
    url: () => {
        let q = Template.instance().searchText.get() ? 'q=' + Template.instance().searchText.get() : ''
        let range = Template.instance().range.get() ? 'range=' + Template.instance().range.get() : ''
        let measure = Template.instance().measure.get() ? 'measure=' + Template.instance().measure.get() : ''
        let type = Template.instance().type.get() ? 'type=' + Template.instance().type.get() : ''
        let url = '/search/items'
        if(q) {
            url = `${url}?${q}`
            if (type) url = `${url}&${type}`
            if (range) url = `${url}&${range}`
            if (measure) url = `${url}&${measure}`
        } else if(range) {
            url = `${url}?${range}`
            if (type) url = `${url}&${type}`
            if (q) url = `${url}&${q}`
            if (measure) url = `${url}&${measure}`
        }
        if (url) return url
    },
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
    range: () => Template.instance().range.get(),
    semanticUi: () => Package && Package['heaven7:wsl-theme-semantic-ui'] ? true : false
})

Template.fulfiller.events({
    'change #range': (e,t) => Template.instance().range.set(e.currentTarget.value)
})