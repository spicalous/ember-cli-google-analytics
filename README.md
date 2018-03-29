ember-cli-google-analytics
==============================================================================

Provide common analytic tracking for your ember projects

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-google-analytics
```


Usage
------------------------------------------------------------------------------

Supply your google analytics id in `config/environment.js`

Separate testing and production analytics by specifyong the id's like so:
```
if (environment === 'development') {
  ENV.googleAnalyticsId = '<your-development-tracking-id>';
}
...
if (environment === 'production') {
  ENV.googleAnalyticsId = '<your-production-tracking-id>';
}
```


Link to addon while developing https://ember-cli.com/extending/#link-to-addon-while-developing
------------------------------------------------------------------------------

While you are developing and testing, you can run npm link from the root of your addon project. This will make your addon locally available by name.

Then run npm link <addon-name> in any hosting application project root to make a link to your addon in your node_modules directory, and add the addon to the package.json. Any change in your addon will now directly take effect in any project that links to it this way.

While testing an addon using npm link, you need an entry in package.json with your addon name, with any valid npm version: `"<addon-name>":"version"`. You need to put `"ember-cli-google-analytics": "*"`.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-google-analytics`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
