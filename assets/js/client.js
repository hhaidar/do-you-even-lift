//
// App
//

'use strict';

angular.module('yourFace', ['ngResource'])
    .config(function($interpolateProvider, $httpProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    });

angular.module('yourFace')
    .factory('peopleFactory', function($resource) {
        return $resource('/people:person', {});
    })
    .controller('yourFaceController', function($scope, peopleFactory) {
        $scope.people = peopleFactory.query()
    });