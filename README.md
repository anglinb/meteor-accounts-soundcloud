## meteor-accounts-soundcloud

SoundCloud OAuth2 login service for use with Meteor Auth

### Package Dependencies
* accounts ([Meteor Docs](http://docs.meteor.com/#accounts_api))
* accounts-oauth2-helper ([Meteor Docs](http://docs.meteor.com/#meteor_loginwithexternalservice))
* http

### Usage

1. `meteor add accounts-soundcloud`
2. Read the 'Integrating with Login Services' section of [Getting Started with Auth](http://docs.meteor.com/#accountsui) and make sure you set up your config and secret correctly.
3. Call `Meteor.loginWithSoundcloud();`

### Credits
* @mataspetrikas for the SoundCloud port 
* Shamelessly based upon [@Jabbslad](https://github.com/Jabbslad/accounts-github) Github OAuth2 login service
