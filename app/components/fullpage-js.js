import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;

        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage();
        });
    }

});
