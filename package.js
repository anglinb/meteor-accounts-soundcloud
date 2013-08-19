Package.describe({
  summary: "Login service for Soundcloud accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('soundcloud', ['client', 'server']);

  api.add_files('soundcloud_login_button.css', 'client');

  api.add_files('soundcloud_server.js', 'server');
  api.add_files('soundcloud_client.js', 'client');
});