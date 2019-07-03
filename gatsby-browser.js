/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onClientEntry = () => {
  window.addEventListener("load", function() {
    window.cookieconsent.initialise({
      onInitialise: function(status) {
        if (this.hasConsented('required')) {
        }
        if (this.hasConsented('analytics')) {
        }
        if (this.hasConsented('marketing')) {
        }
      },
      onAllow: function(category) {
        if (category === 'required') {
        }
        if (category === 'analytics') {
        }
        if (category === 'marketing') {
        }
      },
      onRevoke: function(category) {
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