QUnit.module('Person');

QUnit.test( 'should add a DOM node to the page', function( assert ) {
    React.render(
        <Person name='name' food='food'> with more info</Person>,
        document.getElementById('qunit-fixture')
    );
    assert.ok(document.getElementById('name'), "Passed!" );
});
