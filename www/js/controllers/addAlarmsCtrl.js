angular.module('mojo.controllers').controller('AddAlarmCtrl', function($scope, $state){
    $scope.headerTitle = 'Add Alarm';

    $scope.launchDatePicker = function(){
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

    $scope.openSongList = function(){
        alert("opening song template");
    };
});