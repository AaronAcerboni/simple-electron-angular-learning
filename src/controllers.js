var deskapp = angular.module('deskapp', ['deskapp.services'])

deskapp.controller('FilesCtrl', function ($scope, LocalDirectory) {
  $scope.welcome = "Welcome to file view"
  $scope.search = function () {
    LocalDirectory.fetch($scope.searchInput)
    .then((files) => {
      $scope.files = files
      $scope.warning = ''
    }, ((err) => {
      $scope.files = []
      $scope.warning = err.message
    }))
  }
})