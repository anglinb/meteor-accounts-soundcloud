Accounts.oauth.registerService('soundcloud');

Accounts.addAutopublishFields({
  forLoggedInUser: ['services.soundcloud'],
  forOtherUsers: ['services.soundcloud.username']
});