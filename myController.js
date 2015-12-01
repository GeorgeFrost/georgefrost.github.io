myApp.controller('myController', function ($scope, $interval, refreshDataService) {
  $scope.labels = ["Q1", "Q2"];
  $scope.series = ['Delivered', 'Failed'];
  $scope.data = [
    [65, 59],[20,15]
  ];
  
  $interval(function() {
    var local = $scope.data;
    $scope.data = [];
    $scope.data = refreshDataService.getUpdatedData(local);
  }, 1000);
    
});