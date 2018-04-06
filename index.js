require('aframe')
//
// require('aframe-animation-component')
// // require('aframe-extras.ocean')
// require('aframe-gradient-sky')
// require('aframe-particle-system-component')
//
// require('aframe-gradient-sky')
require('aframe-physics-system')
require('aframe-event-set-component')
require('aframe-physics-extras')
require('aframe-environment-component')
require('aframe-template-component')

// TODO: When next version of super-hands gets published this can be updated
// (as of today, April 6, 2018, the npm version is 5 months out of date, so I'm using a script to the git version)
// require('super-hands');

console.log("hello world");

//color randomizer
AFRAME.registerComponent('color-randomizer', {
    play: function () {
        this.el.addEventListener('drag-drop', function (evt) {
            evt.detail.dropped.setAttribute('material', 'color',
                '#'+(Math.random()*0xFFFFFF<<0).toString(16));
            // color randomizer credit: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript#comment6801353_5365036
        });
    }
});
// turn controller's physics presence on only while button held down
AFRAME.registerComponent('phase-shift', {
    init: function () {
        var el = this.el;
        el.addEventListener('gripdown', function () {
            el.setAttribute('collision-filter', {collisionForces: true});
        });
        el.addEventListener('gripup', function () {
            el.setAttribute('collision-filter', {collisionForces: false});
        });
    }
});
