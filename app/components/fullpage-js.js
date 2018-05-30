import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                anchors:[
                    'home',
                    'intro',
                    'pxl',
                    'lbsu',
                    'portfolios',
                    'about',
                    'contact'
                ],
                menu: 'dots',
                navigation: true,
                navigationPosition: 'right',
                onLeave: function(index, nextIndex, direction) {
                    if(nextIndex != 1) {
                        self.set('siteState.hideText', true);
                        self.set('siteState.logo', true);
                    }
                    else {
                        self.set('siteState.hideText', false);
                        self.set('siteState.logo', false);
                    }
                    self.toggleProperty('siteState.image');
                },
                afterLoad: function(anchorLink, index) {
                    let slide = this[0];
                    let classes = slide.classList;

                    if(classes.contains('intro') && self.siteState === false) {
                        self.toggleProperty('siteState.image');
                    }

                    if(classes.contains('about') && self.siteState === false || classes.contains('contact') && self.siteState === false) {
                        self.toggleProperty('siteState.hideCard');
                    }
                }
            });
        });
    }

});
