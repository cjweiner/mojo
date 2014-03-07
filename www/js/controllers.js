angular.module('mojo.controllers', [])

.controller('AppCtrl', function($scope, $state){
        ionic.Platform.ready(function() {
            // hide the status bar using the StatusBar plugin
            var device = ionic.Platform.device();
            if(device.platform === 'iOS'){
                StatusBar.overlaysWebView(true);
            }
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
                    label:'SuperAwesomeGymTime',
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
.controller('AlarmsCtrl', function($scope, $state, $ionicSideMenuDelegate, AlarmsSvc) {

        $scope.alarms = eval(AlarmsSvc.getAlarms());

        $scope.headerTitle = 'Alarms';

        $scope.leftButtons = [
            {
                type: 'button-clear',
                content: 'Edit',
                tap: function(event){
                    $scope.isEditable = true;
                }
            }
        ];
        $scope.rightButtons = [
            {
                type: 'button-clear icon ion-ios7-plus-empty',
                tap: function(e) {
                    $state.transitionTo('add-alarm')
                }
            }
        ];
})
.controller('AddAlarmCtrl',function($scope){
    $scope.headerTitle = 'Add Alarm';
})
.controller('EditAlarmCtrl', function($scope){

});