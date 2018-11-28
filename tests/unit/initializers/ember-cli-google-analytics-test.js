import Application from '@ember/application';

import { initialize } from 'dummy/initializers/ember-cli-google-analytics';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | ember-cli-google-analytics', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    this.application.register('config:environment', { googleAnalyticsId: 'google-analytics-id' });
    await this.application.boot();

    assert.ok(true);
  });
});
