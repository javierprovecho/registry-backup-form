angular.module('guiRegistryApp', [])
  .controller('RegistryController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
      var registry = this;

      registry.nullData = {
        inputName: null,
        inputSurname: null,
        inputUsername: null,
        inputEmail: null,
        inputPhone: null
      };

      registry.data = angular.copy(registry.nullData);

      registry.register = function() {
        $http.post('https://guiregistryapp.firebaseio.com/.json', registry.data)
          .then(function(response) {
              alert("¡Éxito!");
              console.log(response);
              $window.location.reload();
          }, function(response) {
              alert("¡Error!");
              console.log(response);
        });
      };

    }
  ]);
