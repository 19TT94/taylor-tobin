import Ember from 'ember';

export default Ember.Controller.extend({
});

Ember.Component.reopen({
    siteState: Ember.inject.service('site-state')
});
