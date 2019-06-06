ember-cli-google-analytics
==============================================================================

Provide common analytic tracking for your ember projects
  
Features:
  - track page views on route transitions



Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-google-analytics
```


Usage
------------------------------------------------------------------------------

Supply your google analytics id in `config/environment.js`

You can separate testing and production analytics by specifying the id's like so:
```
if (environment === 'development') {
  ENV.googleAnalyticsId = '<your-development-tracking-id>';
}

if (environment === 'production') {
  ENV.googleAnalyticsId = '<your-production-tracking-id>';
}
```


Development
------------------------------------------------------------------------------

While you are developing and testing, you can run npm link from the root of your addon project. This will make your addon locally available by name.

Then run npm link <addon-name> in any hosting application project root to make a link to your addon in your node_modules directory, and add the addon to the package.json. Any change in your addon will now directly take effect in any project that links to it this way.

While testing an addon using npm link, you need an entry in package.json with your addon name, with any valid npm version: `"<addon-name>":"version"`. You need to put `"ember-cli-google-analytics": "*"`.

See https://ember-cli.com/extending/#link-to-addon-while-developing

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
