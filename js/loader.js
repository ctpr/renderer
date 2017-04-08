angular.module('demo', [])
.controller('ModelSelector', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://35.158.16.68:9000/geometries'
    }).then(function successCallback(response) {
        // asynchronous
        // $scope.response = response;
        updateGeometries(response.data.paths);
    }, function errorCallback(response) {
        // asynchronous
    });
});
// angular.module('demo', [])
// .controller('ModelLoader', function($scope, $http) {
//     $http({
//       method: 'GET',
//       url: 'http://35.158.16.68:9000/geometries/sample_data_scalar.ply'
//     }).then(function successCallback(response) {
//         // asynchronous
//         loadModels(response.data);
//       }, function errorCallback(response) {
//         // asynchronous
//       });
// });
