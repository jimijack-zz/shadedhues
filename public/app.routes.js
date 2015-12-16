(function() {
  "use strict";

  angular
    .module("shuesApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("landingPage", {
        url: "/",
        templateUrl: "/templates/landing.html"
      })
      .state("printPage", {
        url: "/prints",
        templateUrl:  "/templates/prints.html"
      });

    $urlRouterProvider.otherwise("/");
  }


})();
