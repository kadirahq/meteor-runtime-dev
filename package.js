Package.describe({
  summary: 'A supplementary package for detect runtime environment',
  version: '0.0.1',
  git: 'https://github.com/kadirahq/meteor-runtime-dev',
  name: "kadira:runtime-dev",
  debugOnly: true
});

Package.onUse(function (api) {
  api.export(['appEnv']);
  api.addFiles('lib.js');
});