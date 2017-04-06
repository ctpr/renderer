angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });

    // $http({method: "GET", url: "http://rest-service.guides.spring.io/greeting"})
    //         .success(function(data){
    //           // data should be text string here (only if the server response is text/plain)
    //           $scope.greeting = response.data;
    //         }
    //     );

    // $http({
    //   url: 'http://rest-service.guides.spring.io/greeting',
    //   method: 'GET',
    //   transformResponse: [function (data) {
    //       $scope.greeting = response.data;
    //       return data;
    //   }]
    // });

    // $http({
    //   method: 'GET',
    //   url: 'http://35.158.16.68:9000/geometry/sample_data_scalar.ply'
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //     $scope.greeting = response.data;
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });
});
