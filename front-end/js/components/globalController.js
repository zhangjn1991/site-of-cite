// Generated by CoffeeScript 1.7.1
angular.module('sightApp').controller("GlobalController", function($scope) {
  this.tabIndex = 0;
  this.infoBarCtrl = null;
  this.tableViewCtrl = null;
  this.getServerAddr = function() {
    return "http://192.168.0.103:8888/SightOfCite/API.php?action=";
  };
  this.addNewPublication = function() {
    return this.tableViewCtrl.addEmptyRow();
  };
  return 0;
});
