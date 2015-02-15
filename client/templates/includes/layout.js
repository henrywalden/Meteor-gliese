
Template.layout.rendered = function() {
    //add mtphr init to splash bg rotator
    $('#splash-bg-rotator').mtphr_rotator({
        type: 'rotate',
        rotate_type: 'fade',
        rotate_ease: 'easeInOutQuint',
        nav_reverse: 1
    });

    //add mtphr init to splash text rotator
    $('#splash-text-rotator').mtphr_rotator({
        rotate_type: 'slide_up',
        auto_rotate: 1,
        rotate_delay: 7,
        rotate_ease: 'easeInOutQuint',
        nav_reverse: 1
    });


    //add listener for touch events on navigation
    $('#splash-text-rotator').on('mtphr_rotator_before_change_single', function (e, vars) {
        $('#splash-bg-rotator').trigger('mtphr_rotator_goto', [vars.next]);
    });

};



