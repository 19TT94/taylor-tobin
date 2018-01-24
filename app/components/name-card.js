import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        hideCard: function() {
            this.toggleProperty('siteState.hideCard');
        }
    },

    didInsertElement() {
        Ember.run.scheduleOnce('afterRender', () => {
            illookinati({
                target: document.querySelector('.card'),
                max: 10,
                targetPerspective: '800px',
                useDistance: false
            });
        });
    }
});
