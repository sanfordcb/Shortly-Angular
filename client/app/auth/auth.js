// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])
//injecting Auth object here from services.js...all functions return from service.js
.controller('AuthController', function ($scope, $window, $location, Auth) {
  //Maybe linked to ng-model in hmtl
  //input boxes adding .username and .password properties to user obj
  $scope.user = {};

  $scope.signin = function () {
    //pass scope.user as argument that they type in
    //that goes to services.js
    Auth.signin($scope.user)
      .then(function (token) {
        //use local storage in browser to set token 
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
