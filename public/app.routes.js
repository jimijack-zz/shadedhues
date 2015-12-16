(function() {
  "use strict";

  angular
    .module("shuesApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("indexPage", {
        url: "/",
        templateUrl: "/index.html",
        controller: "PrintController",
        controllerAs: "vm"
      })
      .state("printPage", {
        url: "/prints",
        templateUrl:  "/templates/prints.html"
      });

    $urlRouterProvider.otherwise("/");
  }


})();
