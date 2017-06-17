import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        Ember.run.scheduleOnce('afterRender', () => {
            illookinati({
                target: document.querySelector('.card'),
                max: 50, // optional max angle
                targetPerspective: '800px', // optional perspective of the element
                useDistance: false // optional, if true the angle of rotation will depend on
                // cursor's distance from the target (frog gif uses it)
            });
        });
    }
});
