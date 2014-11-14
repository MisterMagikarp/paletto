'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var test = new Engine();
    test.initialisation();
    assertEquals(test.check_length_board(),36);
    assertNotEquals(test.juxtaposition(),0);

};


PalettoTestCase.prototype.testStory2 = function () {




};