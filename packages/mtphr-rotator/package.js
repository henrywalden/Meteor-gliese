
Package.describe({
    name: 'mtphr-rotator',
    summary: 'Rotator plugin for hero background pages as sliders and/or text',
    version: '1.0.0'

});

Package.onUse(function(api, where) {
    api.versionsFrom('0.9.0');

    api.use(['jquery'], 'client');

    api.addFiles(['mtphr-gallery.js', 'mtphr-parallax.js' ,'mtphr-rotator.js', 'mtphr-slidegraph.js', 'mtphr-slider.js' ,'mtphr-tabs.js',
            'mtphr-gallery.css', 'mtphr-rotator.css', 'mtphr-slidegraph.css', 'mtphr-slider.css', 'mtphr-tabs.css'
    ], 'client');

});