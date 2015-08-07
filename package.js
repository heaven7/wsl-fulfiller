Package.describe({
  name: 'heaven7:wsl-fulfiller',
  version: '0.0.1',
  summary: 'Search package',
  git: 'https://github.com/heaven7/wsl-fulfiller.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'heaven7:wsl-core@0.0.1',
        'meteorhacks:npm'
    ], both);

    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'lib/both/wsl-fulfiller.js'
    ], both);

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js'
    ], 'client');

    api.addFiles([
        'lib/server/elasticsearch.js',
        'lib/server/wsl-items.js'
    ], 'server');

});

Npm.depends({
    'elasticsearch': '3.0.2'
});