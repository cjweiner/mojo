angular.module('mojo.controllers', [])

.controller('AppCtrl', function($scope, $state){
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
.controller('AlarmsCtrl', function($scope, $state, AlarmsSvc) {

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
.controller('AddAlarmCtrl',function($scope, $state){
    $scope.headerTitle = 'Add Alarm';

    $scope.launchDatePicker =function(){
        console.log("called launchDatePicker");
        if($scope.alarmTime !== undefined){
            var options = {
                date: new Date($scope.alarmTime),
                mode: 'time',
                doneButtonColor: '#FFA24B',
                cancelButtonColor: '#FFA24B'
            };
        }
        else{
            var options = {
                date: new Date(),
                mode: 'time',
                doneButtonColor: '#FFA24B',
                cancelButtonColor: '#FFA24B'
            };
        }
        //used for being able to debug on web browser for styling purposes
        var device = ionic.Platform.device();
        if(device.platform === 'iOS' || device.platform === 'android'){
            $scope.$watch(datePicker.show(options, function(time){
                $scope.alarmTime = time; //might not need date object but just the time toLocaleTimeString()
                $scope.$apply();
            }));
        }
    };

    $scope.leftButtons = [
        {
            type: 'button-clear',
            content: 'Cancel',
            tap: function(event){
                $state.transitionTo('alarms');
            }
        }
    ];
    $scope.rightButtons = [
        {
            type: 'button-clear',
            content: 'Save',
            tap: function(e) {
                alert('saved alarm');
            }
        }
    ];
})
.controller('EditAlarmCtrl', function($scope){

});