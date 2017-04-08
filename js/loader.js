angular.module('demo', [])
.controller('ModelSelector', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://35.158.16.68:9000/geometries'
    }).then(function successCallback(response) {
        // asynchronous
        updateGeometries(response.data.paths);
    }, function errorCallback(response) {
        // asynchronous
    });
});
