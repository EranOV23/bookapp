var app = angular.module('bookApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "homeController",
      templateUrl: "/views/home.html",
      resolve: {
          posts: function(postData) {
              return postData.getPosts().success(function(data){}).$promise;
          }
      }
    })
    
    .otherwise({
      redirectTo: '/'
    });
});
