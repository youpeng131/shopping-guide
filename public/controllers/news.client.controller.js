/**
 * Created by youpeng on 16/8/4.
 */
angular.module('webapp')
  .controller('NewsController', ['$scope', 'NewsService', NewsController]);

function NewsController($scope, NewsService) {
  $scope.list = [];

  $scope.loadNews = function() {
    NewsService.list().then(
      function(data) {
      $scope.list = data;
    },
      function(err) {}
    );
  };

  $scope.loadNews();
}