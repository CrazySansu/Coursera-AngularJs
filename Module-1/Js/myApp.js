(function(){
'use strict';

angular.module('assignmentOne',[])
.controller('appController', appController);
appController.$inject = ['$scope','$filter'];

function appController($scope, $filter){
  $scope.itemsList = "";
  $scope.message = "";
  $scope.count = 0;
  $scope.color = "black"
  $scope.border = "black"
  function displayMessage() {
      if ($scope.itemsList == "" || $scope.count == 0) {
          $scope.message = "Please enter data first"
          $scope.color = "red";
          $scope.border = "red";
      }else{
          if ($scope.count > 3) {
              $scope.message = "Too Much!"
          }else{
              $scope.message = "Enjoy!"
          }
          $scope.color = "green";
          $scope.border = "green";
      }
  }

  $scope.countItems = function() {
      $scope.count = 0;
      var items = $scope.itemsList.split(',');
      for(var itm of items){
          if(itm.trim() != "")
            $scope.count += 1;
      }
      displayMessage();
  }

}

})();
