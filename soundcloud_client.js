Meteor.loginWithSoundcloud = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Soundcloud.requestCredential(options, credentialRequestCompleteCallback);
};