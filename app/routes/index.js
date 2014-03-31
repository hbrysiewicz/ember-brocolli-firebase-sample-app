export default Ember.Route.extend({
  actions: {
    login: function(username, password) {
      var chatRef = new Firebase('https://incandescent-fire-3145.firebaseio.com/');
      var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
        // do something with error
        debugger;
      });
      auth.login('github');
    },

    logout: function() {}
  }
});
