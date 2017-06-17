import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                anchors:[
                    'home',
                    'web',
                    'design',
                    'photo',
                    'app',
                    'contact'
                ],
                menu: 'dots',
                navigation: true,
                navigationPosition: 'right',
                onLeave: function(index, nextIndex, direction) {
                    if(nextIndex != 1) {
                        self.set('siteState.hideText', true);
                    }
                    else {
                        self.set('siteState.hideText', false);
                    }
                    self.toggleProperty('siteState.image');
                }
            });
        });
    }

});
