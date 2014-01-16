/**
 * @class SampleApplication
 * @returns {{sayHello: internalCallout}}
 * @constructor
 */
var SampleApplication = function () {
    'use strict';

    function internalCallout() {
        console.log('Hello, World!');
    }

    return {
        sayHello: internalCallout
    }
}