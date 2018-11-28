'use strict';

module.exports = {
  name: require('./package').name,

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
