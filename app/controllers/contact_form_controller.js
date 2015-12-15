(function() {
  'use strict';

  angular
    .module('shuesApp', []);
    .controller('ContactFormController', ['$scope', '$http', 'vmAlert', '$animate',

      function($scope, http, $vmAlert, $animate) {

        $scope.alertPosition = {
          bottom: false,
          top: true,
          left: false,
          right: true
        };

        $scope.getAlertPosition = function() {
          return Object.keys($scope.alertPosition)
            .filter(function(pos) {
              return $scope.alertPosition[pos];
            })
            .join(' ');
        };

        this.sendMail = function () {

          data = ({
            contactName : this.contactName,
            contactEmail : this.contactEmail,
            contactPhone : this.contactPhone,
            contactMsg : this.contactMsg
          });

          $http.post('/contact-form', data)
            success(function(data, status, headers, config) {
              $vmAlert.show(
                $vmAlert.simple()
                  .content('Thank you for your message ' + data.contactName)
                  .position($scope.getAlertPosition())
                  .hideDelay(5000)
              );
            })
            error(function(data, status, headers, config) {

            });

        };
      }
    ]);



})();

