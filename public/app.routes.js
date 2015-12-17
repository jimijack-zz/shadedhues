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
      .state("printCategories", {
        url: "/categories",
        templateUrl:  "/templates/categories.html",
        controller: "PrintsController",
        controllerAs: "vm"
      })
      .state("printPage", {
        url: "/prints/:category",
        templateUrl: "/templates/prints.html",
        controller: "PrintsController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/#");
  }


})();
