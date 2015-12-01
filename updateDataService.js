myApp.factory('refreshDataService', function() {
  var service = {};
  
  service.getUpdatedData = function(local) {
    var updatedData = [];
    
    angular.forEach(local, (function (thing) {
      var data1 = [];
      
      angular.forEach(thing, function(thing2) {
        data1.push(Math.ceil(thing2 += (Math.random() * 5)));
      })
      
      updatedData.push(data1);
    }));
    
    return updatedData;
  }
  
  return service;
});