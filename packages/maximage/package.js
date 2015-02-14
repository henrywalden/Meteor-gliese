
Package.describe({
    name: 'maximage',
    summary: 'Rotator plugin for images as backgrounds',
    version: '2.0.0'

});

Package.onUse(function(api, where) {
    api.versionsFrom('0.9.0');

    api.use(['jquery'], 'client');

    api.addFiles(['jquery.cycle.all.min.js', 'jquery.maximage.js', 'jquery.maximage.min.css'
    ], 'client');

});