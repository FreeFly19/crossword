'use strict';
angular.module('myApp')
    .controller('mainCtrl', function ($scope, $rootScope) {

        $scope.getCrossword = function () {

            var result = {
                grid: [
                    ["a", "p", "p", "l", "e"],
                    ["*", "*", "*", "i", "*"],
                    ["*", "*", "*", "m", "*"],
                    ["*", "*", "*", "e", "*"]
                ],
                info: [
                    {
                        firstSymbolPosition: 0,
                        lastSymbolPosition: 4,
                        wordPosition: 0,
                        layout: "h",//v-vertical h-horizontal
                        question: "Is apple?",
                        number: 1
                    },
                    {
                        firstSymbolPosition: 0,
                        lastSymbolPosition: 3,
                        wordPosition: 3,
                        layout: "h",
                        question: "Is lime?",
                        number: 2
                    }
                ]
            };
            return result;

        };

    });