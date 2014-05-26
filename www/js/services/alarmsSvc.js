angular.module('mojo.services', []).factory('AlarmsSvc', function() {
    return{
        getAlarms: function(){
            return window.localStorage.getItem("alarms");
        },
        addAlarm: function(alarm){

        }
    };
});