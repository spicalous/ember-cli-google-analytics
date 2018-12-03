/* global gtag, dataLayer */
import { assert } from '@ember/debug';
import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';

function reportPagePathOnDidTransition(googleAnalyticsId, router) {
  gtag('config', googleAnalyticsId, {
    'page_path': router.currentURL
  });
}

export function initialize(application) {
  const { googleAnalyticsId } = application.resolveRegistration('config:environment');

  assert('Missing googleAnalyticsId in config/environment.', !!googleAnalyticsId);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', googleAnalyticsId);

  Route.reopen({

    router: service(),

    actions: {
      didTransition() {
        this._super(...arguments);

        scheduleOnce('afterRender', this, reportPagePathOnDidTransition, googleAnalyticsId, this.get('router'));
      }
    }
  });

}

export default {
  initialize
};
