import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                menu: 'dots',
                navigation: true,
                navigationPosition: 'right',
                onLeave: function(index, nextIndex, direction) {
                    self.toggleProperty('siteState.hideText');
                    self.toggleProperty('siteState.image');
                }
            });
        });
    }

});
