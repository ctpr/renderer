angular.module('demo', [])
.controller('ModelLoader', function($scope, $http) {
    console.log("DEBUG OUTPUT")

    // $http.get('http://35.158.16.68:9000/geometry/sample_data_scalar.ply').
    //     then(function(response) {
    //         $scope.geometry = response.data;
    //     });

    // $http({method: "GET", url: "http://35.158.16.68:9000/geometry/sample_data_scalar.ply"})
    //         .success(function(data){
    //           // data should be text string here (only if the server response is text/plain)
    //           $scope.geometry = data;
    //         }
    //     );

    // $http({
    //   url: 'http://35.158.16.68:9000/geometry/sample_data_scalar.ply',
    //   method: 'GET',
    //   transformResponse: [function (data) {
    //       $scope.geometry = data;
    //       return data;
    //   }]
    // });

    $http({
      method: 'GET',
      url: 'http://35.158.16.68:9000/geometry/sample_data_scalar.ply'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.geometry = response;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
});
