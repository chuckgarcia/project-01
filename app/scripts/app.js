/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'ui.bootstrap'                 // Bootstrap
    ])
})();

var app = angular.module('formApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.formData = {};

    $scope.submitForm = function (formData) {
        alert('Form submitted with' + JSON.stringify(formData));
    };
});