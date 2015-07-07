var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          });
});
app.controller('cfgController',function($scope){

  $scope.names = [
    'Lolita Dipietro',
    'Annice Guernsey',
    'Gerri Rall',
    'Ginette Pinales',
    'Lon Rondon',
    'Jennine Marcos',
    'Roxann Hooser',
    'Brendon Loth',
    'Ilda Bogdan',
    'Jani Fan',
    'Grace Soller',
    'Everette Costantino',
    'Andy Hume',
    'Omar Davie',
    'Jerrica Hillery',
    'Charline Cogar',
    'Melda Diorio',
    'Rita Abbott',
    'Setsuko Minger',
    'Aretha Paige'];

});