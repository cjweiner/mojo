angular.module('mojo.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('AlarmsSvc', function() {
        return{
            getAlarms: function(){
                return window.localStorage.getItem("alarms");
            },
            addAlarm: function(alarm){

            }
        };
});
