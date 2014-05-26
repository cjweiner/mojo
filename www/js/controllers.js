angular.module('mojo.controllers', []).controller('AppCtrl', function($scope, $state){
        ionic.Platform.ready(function() {
            // hide the status bar using the StatusBar plugin
            var device = ionic.Platform.device();
            if(device.platform === 'iOS'){
                StatusBar.overlaysWebView(true);
            }
            //used for testing remove from
            window.localStorage.clear();
            var alarms = [
                {
                    id:1,
                    time:'6:05 pm',
                    label:'Alarm',
                    repeat:'never',
                    active:false

                },
                {
                    id:2,
                    time: '6:35 am',
                    label:'Super Awesome Gym Time',
                    repeat:'never',
                    active:true
                },
                {
                    id:3,
                    time: '6:54 am',
                    label:'RockDa PARTY!!!',
                    repeat:'never',
                    active:false
                },
                {
                    id:4,
                    time: '2:35 am',
                    label:'awesomesauce',
                    repeat:'never',
                    active:false
                },
                {
                    id:5,
                    time: '1:35 am',
                    tone:'play this',
                    label:'Rock Out',
                    repeat:'never',
                    active:false
                }

            ];

            var jsonString = JSON.stringify(alarms);
            window.localStorage.setItem("alarms",jsonString);
        });
})
.controller('EditAlarmCtrl', function($scope){

});