'use strict';

/**
 * @ngdoc service
 * @name myTunesApp.player
 * @description
 * # player
 * Factory in the myTunesApp.
 */
angular.module('myTunesApp')
  .factory('player', function () {
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
