Meteor.startup(function () {
    if(Package['heaven7:wsl-items']) {
        Items.before.insert(function (userId, doc) {
           // definitions for elasticsearch
        });
    }
});