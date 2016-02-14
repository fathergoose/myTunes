'use strict';

/**
 * @ngdoc service
 * @name myTunesApp.audio
 * @description
 * # audio
 * Factory in the myTunesApp.
 */
angular.module('myTunesApp')
  .factory('audio', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
