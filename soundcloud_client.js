Accounts.oauth.registerService('soundcloud');

Meteor.loginWithSoundcloud = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
        callback = options;
        options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Soundcloud.requestCredential(options, credentialRequestCompleteCallback);
};