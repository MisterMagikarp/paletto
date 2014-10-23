'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var Engine = new Engine();
    assertEquals(Engine.check_length_board(),36);
    assertNotEquals(Engine.initialisation_board(),null);


};