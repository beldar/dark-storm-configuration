angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', ['$scope', '$window', function($scope, $window) {

    $scope.tempUnits = [
        { text: 'Celcius', value: 'C' },
        { text: 'Farenheit', value: 'F' },
        { text: 'Kelvin', value: 'K' }
    ];
    
    $scope.data = {
        temp_unit: 'C',
        inverted: false,
        location: '',
        gps: true,
        refresh: 30
    };
    
    $scope.saveData = function() {
        console.log('Send Data', this.data); 
        $window.location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(this.data));
    };
    
    $scope.cancel = function() {
        console.log('Cancel'); 
        $window.location.href = 'pebblejs://close';
    };

}]);
