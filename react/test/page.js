QUnit.module('Page.div');

QUnit.test('call with argument should not blow up', function( assert ) {
    Page.div('test');
    assert.ok( true, "Passed!" );
});

QUnit.test('call without argument should throw error', function( assert ) {
    assert.throws(Page.div(), "did not throw error when missing id");
});

QUnit.test('should add a new element to the DOM', function( assert ) {
    var id = 'test';
    Page.div(id);
    assert.ok(document.getElementById(id), "Did not find element in DOM" );
});
