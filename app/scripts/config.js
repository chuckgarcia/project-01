/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/inicio");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            controller:MainCtrl,
            templateUrl: "views/common/content.html"

        })
        .state('inicio', {
            url: "/inicio",
            templateUrl: "/views/BToB.html",
            data: { pageTitle: 'inicio', specialClass: 'b-to-b-page' }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });