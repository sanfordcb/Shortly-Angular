angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  //send link to the server to get converted to smaller link
  //post request to server
    //in server, they hash the stuff 

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(){
        //add link 
        //solution just '/' - why does it work?
        $location.path('/links');
      })
      .catch(function(error){
        console.error(error);
      });
  
  };

  // $scope.isValidUrl = function() {
  //   Links.isValidUrl($scope.link)
  //     .then(function(isValid){
  //       return isValid;
  //     })
  //     .catch(function(error){
  //       console.error(error);
  //     });
  // };
});
