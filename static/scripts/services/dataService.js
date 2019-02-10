app.factory('dataService', function($http, $q) {
	var self = this;

	self.data = undefined;

	return {
        loadData: function() {

          return $q(function(resolve, reject) {

            var error = function(message) {
              return function() {
                reject(message);
              }
            };
            var success = function(result) {
              self.data = result.data;
              resolve(result.data);
            };

            var errorFn = error('error while loading data');
          });
        },
        getData: function() {
          return self.data;
        },
        hasData: function() {
          return self.data!=undefined;
        },
        getDataForKey: function(key) {
          return self.data[key];
        }
      }
});