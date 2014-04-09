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
        return _.shuffle(window.data.people);
    })
    .controller('yourFaceController', function($scope, $interval, peopleFactory) {
        $scope.people = peopleFactory;
        $scope.index = 0;
        $('body').keydown(function(e) {
            switch(e.keyCode) {
                // P
                case 80:
                    $scope.toggle();
                    break;
                // Left / Up
                case 37:
                case 40:
                    $scope.stop();
                    $scope.previous();
                    break;
                // Right / Down
                case 38:
                case 39:
                    $scope.stop();
                    $scope.next();
                    break;
            }
            $scope.$apply();
        });
        $scope.start = function() {
            $scope.stop();
            $scope.timer = $interval(function() {
                $scope.next();
            }, 7 * 1000);
            $scope.paused = false;
        };
        $scope.stop = function() {
            if ($scope.timer) {
                $interval.cancel($scope.timer);
            }
            $scope.timer = null;
            $scope.paused = true;
        };
        $scope.toggle = function() {
            if ($scope.timer) {
                $scope.stop();
                console.log('stopped')
            } else {
                $scope.start();
                console.log('started')
            }
        }
        $scope.previous = function() {
            if ($scope.index > 0){
                $scope.index--;
            } else {
                $scope.index = $scope.people.length - 1;
            }
        }
        $scope.next = function() {
            if ($scope.index < $scope.people.length - 1){
                $scope.index++;
            } else {
                $scope.index = 0;
            }
        }
        $scope.start();
    });