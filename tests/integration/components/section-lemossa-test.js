import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-lemossa', 'Integration | Component | section lemossa', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{section-lemossa}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#section-lemossa}}
      template block text
    {{/section-lemossa}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
