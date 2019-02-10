var app = angular.module("myApp", ["ngMaterial"]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('yellow')
      .backgroundPalette('blue-grey');
});




















