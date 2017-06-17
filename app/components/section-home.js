import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        hideText: function() {
            this.toggleProperty('siteState.hideText');
        }
    }
});
