/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onClientEntry = () => {

  window.addEventListener("load", function () {
    var gtagId = 'UA-142992812-2'; 
    window['ga-disable-' + gtagId] = false;
    var dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    
    window.cookieconsent.initialise({
      onInitialise: function (status) {
        if (this.hasConsented('required')) {
        }
        if (this.hasConsented('analytics')) {
          // Enable tracking
          window['ga-disable-' + gtagId] = false;
          // Track this pageview
          gtag('config', gtagId);

        }
        if (this.hasConsented('marketing')) {
        }
      },
      onAllow: function (category) {
        if (category === 'required') {
        }
        if (category === 'analytics') {
          if (category === 'analytics') {
            window['ga-disable-' + gtagId] = false;

            // Track this pageview
            gtag('config', gtagId);
          }
        }
        if (category === 'marketing') {
        }
      },
      onRevoke: function (category) {
        if (category === 'required') {
        }
        if (category === 'analytics') {
        }
        if (category === 'marketing') {
        }
      }
    })
  });

}