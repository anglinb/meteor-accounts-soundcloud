(function () {
  Accounts.oauth.registerService('soundcloud', 2, function(query) {

    var accessToken = getAccessToken(query);
    var identity = getIdentity(accessToken);

    var serviceData = {
      accessToken: accessToken
    };

    //Pick most useful SC profile fields
    //see http://developers.soundcloud.com/docs/api/reference#me
    var whitelisted = ['id','username','permalink_url','avatar_url','country',
                      'full_name','city','description','website'];

    var scFields = _.pick(identity, whitelisted);
    _.extend(serviceData, scFields);

    return {
      serviceData: serviceData,
      options: {profile: {name: identity.full_name}}
    };
  });

  var getAccessToken = function (query) {
    var config = Accounts.loginServiceConfiguration.findOne({service: 'soundcloud'});
    if (!config)
      throw new Accounts.ConfigError("Service not configured");

    var result = Meteor.http.post("https://api.soundcloud.com/oauth2/token", {
      headers: {Accept: 'application/json'},
      params: {
        code: query.code,
        grant_type: "authorization_code",
        client_id: config.clientId,
        client_secret: config.secret,
        redirect_uri: Meteor.absoluteUrl("_oauth/soundcloud?close"),
        state: query.state
      }
    });

    if (result.error) // if the http response was an error
      throw result.error;

    if (result.data.error) // if the http response was a json object with an error attribute
      throw result.data;

    return result.data.access_token;
  };

  var getIdentity = function (accessToken) {
    var result = Meteor.http.get("https://api.soundcloud.com/me", {
      params: {
        oauth_token: accessToken,
        format: "json"
      }
    });

    if (result.error)
      throw result.error;

    return result.data;
  };
}());