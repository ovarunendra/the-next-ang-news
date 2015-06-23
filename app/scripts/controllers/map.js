'use strict';

app.controller('MapController', function () {
    var mapCtrl = this;
    mapCtrl.map = { center: { latitude: 12.9667, longitude: 77.5667 }, zoom: 8 };
    mapCtrl.options = {scrollwheel: false};
    var events = {
        places_changed: function (searchBox) {
        }
    };
    mapCtrl.searchbox = { template:'searchbox.tpl.html', events:events};
});
