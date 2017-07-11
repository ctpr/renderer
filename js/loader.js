angular.module('demo', [])
.controller('ModelSelector', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://geometry.duckdns.org:9000/geometries'
    }).then(function successCallback(response) {
        // asynchronous
        updateGeometries(response.data.paths);
    }, function errorCallback(response) {
        // asynchronous
    });
});
