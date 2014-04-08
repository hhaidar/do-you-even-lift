//
// App
//

'use strict';

angular.module('yourFace', ['ngResource', 'ngFitText', 'angular-carousel'])
    .config(function($interpolateProvider, $httpProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    });

angular.module('yourFace')
    .factory('peopleFactory', function($resource) {
        return window.data.people;
    })
    .controller('yourFaceController', function($scope, $interval, peopleFactory) {
        $scope.people = peopleFactory;
        $scope.index = 0;
        $interval(function() {
            $scope.index++;
        }, 3000)
    });