Package.describe({
  name: 'heaven7:wsl-search',
  version: '0.0.1',
  summary: 'Search package',
  git: 'https://github.com/heaven7/wsl-search.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use(['heaven7:wsl-core'], both);
    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'lib/both/wsl-search.js'
    ], both);

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js'
    ], 'client');

});
