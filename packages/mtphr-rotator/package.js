
Package.describe({
    name: 'mtphr-rotator',
    summary: 'Rotator plugin for hero background pages as sliders and/or text',
    version: '1.0.0'

});

Package.onUse(function(api, where) {
    api.versionsFrom('0.9.0');

    api.use(['jquery'], 'client');

    api.addFiles(['mtphr-parallax.js' ,'mtphr-rotator.js', 'mtphr-slider.js', 'jquery.easing.1.3.js',
        'jquery.touchSwipe.min.js', 'mtphr-rotator.css', 'mtphr-slider.css'
    ], 'client');

});