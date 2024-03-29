(function() {
  'use strict';

  angular
      .module("shuesApp")
      .controller("PrintsController", PrintsController);

  PrintsController.$inject = ["$state", "$log", "$http", "$stateParams"];

  function PrintsController($state, $log, $http, $stateParams) {
    var vm = this;

    vm.prints = [];

    vm.newPrint = {
      title: "",
      category: "",
      size: "",
      price: "",
      imageURL: ""
    };

    vm.params = $stateParams;

    vm.getPrints = getPrints;
    vm.postPrint = postPrint;

    vm.getPrints();

    function getPrints() {
      $http.get('/api/prints').then(function(response) {
        vm.prints = response.data;
      }, function(errRes) {
        console.error('Error gathering prints, idiot!', errRes);
      });
    };

    function postPrint() {

    };

  };

})();

