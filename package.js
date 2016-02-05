Package.describe({
  name: 'heaven7:wsl-fulfiller',
  version: '0.0.3',
  summary: 'Search package',
  git: 'https://github.com/heaven7/wsl-fulfiller.git',
  documentation: 'README.md'
})

const both = ['client','server'],
    packages = [
        'heaven7:wsl-core@0.0.3_1',
        'easy:search@2.0.5',
        'easysearch:components@2.0.5',
        'easysearch:elasticsearch@2.0.3',
        'easysearch:autosuggest@2.0.6'
    ]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages, both)
    api.imply(packages)

    api.addFiles([
        'lib/both/wsl-fulfiller.js'
    ], both)

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js'
    ], 'client')

    api.addFiles([
    ], 'server')

})
