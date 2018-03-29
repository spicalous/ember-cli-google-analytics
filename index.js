'use strict';

module.exports = {
  name: 'ember-cli-google-analytics',

  // for live reloading while developing addon
  isDevelopingAddon() {
    return true;
  },

  contentFor(type, config) {

    if (type === 'head' && config.googleAnalyticsId) {
      return `<script async src="https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}"></script>`;
    }
  }

};
