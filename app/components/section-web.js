import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        image: function() {
            this.toggleProperty('siteState.image');
        }
    }
});
