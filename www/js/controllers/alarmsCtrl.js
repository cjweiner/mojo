angular.module('mojo.controllers').controller('AlarmsCtrl', function($scope, $state, AlarmsSvc) {

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
});