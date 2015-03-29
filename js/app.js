angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $window) {
    function getURLParameter(name) {
        var r = decodeURI(
                (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
        );
        return r === 'null' ? false : r;
    }
    $scope.tempUnits = [
        { text: 'Celcius', value: 'C' },
        { text: 'Farenheit', value: 'F' }
    ];
    
    $scope.data = {
        weather_scale: getURLParameter('u') ? getURLParameter('u') : 'C',
        inverted: getURLParameter('i') && getURLParameter('i') === '1' ? true : false,
        location_str: getURLParameter('l') ?  getURLParameter('l') : '',
        gps: getURLParameter('g') === '0' ? false : true,
        refresh: getURLParameter('r') ?  getURLParameter('r') : 30 
    };
    
    $scope.saveData = function() {
        console.log('Send Data', this.data); 
        $window.location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(this.data));
    };
    
    $scope.cancel = function() {
        console.log('Cancel'); 
        $window.location.href = 'pebblejs://close';
    };

});
