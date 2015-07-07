var app=angular.module('single-page-app',['ngRoute', 'youtube-embed']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'home.html'
  })
  .when('/youtube',{
    templateUrl: 'about.html'
  });
});
app.controller('gaController',function($scope, $http){

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
    'Aretha Paige'
  ];

  $scope.ga = [];

  $scope.searchYoutube = function(){

    if ( typeof $scope.ga.keyword === 'undefined' || $scope.ga.keyword === ''){

      $scope.error = 'No videos';
      $scope.videos = null;

    } else {

      $scope.error = null;

      $http.get('https://www.googleapis.com/youtube/v3/search',{
        params: {
          key: 'AIzaSyACTxZmBK4_-UBqoxKzojXgmPZkTNWP5U8',
          type: 'video',
          maxResults : '5',
          part: 'id, snippet',
          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
          q: $scope.ga.keyword
        }
      })
      .success( function (data) {
        $scope.ga.keyword = '';
        $scope.videos = data.items;
      })
      .error( function (){
        $scope.ga.keyword = '';
        $scope.error = 'There was an error. Please try again.'
      });

    }

  };

});