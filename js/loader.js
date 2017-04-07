angular.module('demo', [])
.controller('ModelLoader', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'http://35.158.16.68:9000/geometry/sample_data_scalar.ply'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        // $scope.status = response.status;
        // $scope.geometry = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
});
