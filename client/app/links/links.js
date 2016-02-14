angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // display links user has in DOM
  // redirect to site
  $scope.getLinks = function () {
    //invoking getLinks from service.js
    Links.getLinks($scope.data)
      .then(function (links){
        //display links on page
        //from services...
        $scope.data.links = links;
        console.log(links);
        console.log($scope.data.links);
      })
      .catch(function(error){
        console.error(error);
      });
  };

  $scope.getLinks();
  //Use navToLink on serverside linkController?
});


// var LinkSchema = new mongoose.Schema({
//  visits: Number,
//  link: String,
//  title: String,
//  code: String,
//  base_url: String,
//  url: String
// });
