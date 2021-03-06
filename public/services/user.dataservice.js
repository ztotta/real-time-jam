(function() {
  "use strict";

  angular
    .module("jamApp")
    .factory("userDataService", userDataService);

  userDataService.$inject = [];

  function userDataService() {
    var user = {
      name:        "",
      century:     "",
      isLoggedIn:  isLoggedIn
    };

    return user;

    function isLoggedIn() {
      return user.name.length !== 0;
    }
  }

})();
