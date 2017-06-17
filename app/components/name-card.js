import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        Ember.run.scheduleOnce('afterRender', () => {
            illookinati({
                target: document.querySelector('.card'),
                max: 10,
                targetPerspective: '800px',
                useDistance: false
            });
        });
    },

    actions: {
        hideText: function() {
            this.toggleProperty('siteState.hideText');
        }
    }
});
